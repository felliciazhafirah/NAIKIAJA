import {
  Injectable,
  NotFoundException,
  BadRequestException,
  
} from '@nestjs/common'

import { PrismaService } from '../prisma/prisma.service'
import { NotificationService } from '../notification/notification.service';
import { CreateRefundDto } from './dto/create-refund.dto'

@Injectable()
export class RefundsService {

  constructor(
    private prisma: PrismaService,
    private notificationService: NotificationService,
  ) {}

  
  async create(dto: CreateRefundDto) {

    const booking =
      await this.prisma.booking.findUnique({
        where: {
          id: dto.bookingId,
        },

        include: {
          seats: true,
        },
      })

   if (!booking) {
  throw new NotFoundException('Booking tidak ditemukan');
}

if (booking.status !== 'PAID') {
  throw new BadRequestException('Booking belum dibayar');
}

    await this.prisma.seat.updateMany({
      where: {
        bookingId: booking.id,
      },

      data: {
        isBooked: false,
        bookingId: null,
      },
    })

    await this.prisma.booking.update({
      where: {
        id: booking.id,
      },

      data: {
        status: 'REFUNDED',
      },
    })

    return this.prisma.refund.create({
      data: {
        bookingId: dto.bookingId,
        reason: dto.reason,
        status: 'PENDING',
      },
    })
  }

  
  async getMyRefund(userId: number) {
  return this.prisma.refund.findMany({
    where: {
      booking: {
        userId: userId,
      },
    },
    include: {
      booking: true,
    },
  });
}

  async findAll(status?: string) {
  return this.prisma.refund.findMany({
    where: status
      ? {
          status: status,
        }
      : {},
    include: {
      booking: true,
      // user kalau mau
    },
    orderBy: {
      id: 'desc',
    },
  });
}

async findOne(id: number) {
    console.log('ID masuk:', id);
  return this.prisma.refund.findUnique({
    where: {
      id,
    },
  });
}

async findMyRefunds(userId: number) {
  return this.prisma.refund.findMany({
    where: {
      booking: {
        userId,
      },
    },
    include: {
      booking: true,
    },
  });
}

  async approve(refundId: number) {
  const refund = await this.prisma.refund.update({
    where: { id: refundId },
    data: {
      status: 'APPROVED',
    },
    include: {
      booking: true,
    },
  });

  // 🔔 kirim notifikasi ke user
  await this.notificationService.create(
    refund.booking.userId,
    'Refund Disetujui',
    `Refund untuk booking #${refund.booking.id} telah disetujui. Dana akan diproses.`,
  );

  return refund;
}
    }
  
