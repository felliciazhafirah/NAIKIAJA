import {
  Injectable,
  NotFoundException,
} from '@nestjs/common'

import {
  BookingStatus,
} from '@prisma/client'

import { PrismaService } from '../prisma/prisma.service'
import { ApiProperty } from '@nestjs/swagger'

@Injectable()
export class PaymentsService {

  constructor(
    private prisma: PrismaService,
  ) {}

  async pay(
    bookingId: number,
  ) {

    // CHECK BOOKING
    const booking =
      await this.prisma.booking.findUnique({
        where: {
          id: bookingId,
        },
      })

    // NOT FOUND
    if (!booking) {
      throw new NotFoundException(
        'Booking not found',
      )
    }

    // UPDATE STATUS
    await this.prisma.booking.update({
      where: {
        id: bookingId,
      },

      data: {
        status:
          BookingStatus.PAID,
      },
    })

    return {
      message:
        'Payment success',
    }
  }
}