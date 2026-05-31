import {
  Injectable,
  NotFoundException,
} from '@nestjs/common'

import { PrismaService } from '../prisma/prisma.service'

import { CreateRefundDto } from './dto/create-refund.dto'

@Injectable()
export class RefundsService {

  constructor(
    private prisma: PrismaService,
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
      throw new NotFoundException(
        'Booking not found',
      )
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

  async approve(id: number) {

    return this.prisma.refund.update({
      where: {
        id,
      },

      data: {
        status: 'APPROVED',
      },
    })
  }
}