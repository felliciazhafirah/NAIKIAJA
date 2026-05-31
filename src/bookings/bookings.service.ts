import {
  BadRequestException,
  Injectable,
} from '@nestjs/common'

import { PrismaService } from '../prisma/prisma.service'
import { CreateBookingDto } from './dto/create-booking.dto'

@Injectable()
export class BookingsService {

  constructor(
    private prisma: PrismaService,
  ) {}

  async createBooking(
    userId: number,
    dto: CreateBookingDto,
  ) {

    const seats = await this.prisma.seat.findMany({
      where: {
        id: {
          in: dto.seatIds,
        },
      },
    })

    const booked = seats.find(
      seat => seat.isBooked,
    )

    if (booked) {
      throw new BadRequestException(
        'Seat already booked',
      )
    }

    // CHECK SCHEDULE
    const schedule =
      await this.prisma.schedule.findUnique({
        where: {
          id: dto.scheduleId,
        },
      })

    if (!schedule) {
      throw new BadRequestException(
        'Schedule not found',
      )
    }

    // CHECK TICKET
    if (
      schedule.availableTickets <
      dto.seatIds.length
    ) {
      throw new BadRequestException(
        'Tickets sold out',
      )
    }

    // CREATE BOOKING
    const booking =
      await this.prisma.booking.create({
        data: {
          userId,

          scheduleId: dto.scheduleId,

          totalPrice:
            seats.length * schedule.price,

          status: 'PENDING',

          seats: {
            connect: dto.seatIds.map(
              id => ({ id }),
            ),
          },
        },
      })

    // REDUCE TICKET
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

    // UPDATE SEAT
    await this.prisma.seat.updateMany({
      where: {
        id: {
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
}