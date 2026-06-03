import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'

import { PrismaService } from '../prisma/prisma.service'
import { CreateBookingDto } from './dto/create-booking.dto'

@Injectable()
export class BookingsService {
  constructor(
    private prisma: PrismaService,
  ) { }

  async createBooking(
    userId: number,
    dto: CreateBookingDto,
  ) {
    const schedule = await this.prisma.schedule.findUnique({
      where: { id: dto.scheduleId },
    });

    if (!schedule) {
      throw new BadRequestException('Schedule not found');
    }

    const seats = await this.prisma.seat.findMany({
      where: {
        busId: schedule.busId, // ✔️ sekarang aman
        seatNumber: {
          in: dto.seatIds,
        },
      },
    });
    const booked = seats.find(
      seat => seat.isBooked,
    )

    if (booked) {
      throw new BadRequestException(
        'Seat already booked',
      )
    }


    if (!schedule) {
      throw new BadRequestException(
        'Schedule not found',
      )
    }

    if (
      schedule.availableTickets <
      dto.seatIds.length
    ) {
      throw new BadRequestException(
        'Tickets sold out',
      )
    }

    const seatCount = dto.seatIds.length;

    const booking = await this.prisma.booking.create({
      data: {
        Namalengkap: dto.Namalengkap,
        Email: dto.Email,
        NoHp: dto.NoHp,
        KTP: dto.KTP,
        userId,

        scheduleId: dto.scheduleId,

        totalPrice: seatCount * schedule.price,

        status: 'PENDING',

        seats: {
          connect: seats.map(seat => ({
            id: seat.id,
          })),
        },
      },
    });

    await this.prisma.schedule.update({
      where: {
        id: dto.scheduleId,
      },
      data: {
        availableTickets: {
          decrement: dto.seatIds.length,
        },
      },
    })

    await this.prisma.seat.updateMany({
      where: {
        seatNumber: {
          in: dto.seatIds,
        },
      },
      data: {
        isBooked: true,
        bookingId: booking.id,
      },
    })

    return booking
  }

  async payBooking(id: number) {
    return this.prisma.booking.update({
      where: { id },
      data: {
        status: 'PAID',
      },
    });
  }

  async getInvoice(id: number) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: {
        schedule: true,
        seats: true,
      },
    });

    if (!booking) {
      throw new NotFoundException('Booking tidak ditemukan');
    }

    if (booking.status !== 'PAID') {
      throw new BadRequestException(
        'Pembayaran belum selesai',
      );
    }

    return booking;
  }


  async getMyBookings(userId: number) {
    return this.prisma.booking.findMany({
      where: {
        userId,
      },
      include: {
        schedule: true,
        seats: true,
      },
    })
  }
}