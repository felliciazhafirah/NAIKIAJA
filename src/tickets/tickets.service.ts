import {
  Injectable,
  NotFoundException,
} from '@nestjs/common'

import { PrismaService } from '../prisma/prisma.service'

import * as QRCode from 'qrcode'

@Injectable()
export class TicketsService {

  constructor(
    private prisma: PrismaService,
  ) {}

  async generate(bookingId: number) {

    const booking =
      await this.prisma.booking.findUnique({
        where: {
          id: bookingId,
        },
      })

    if (!booking) {
      throw new NotFoundException(
        'Booking not found',
      )
    }

    const qr =
      await QRCode.toDataURL(bookingId)

    return this.prisma.ticket.create({
      data: {
        bookingId,
        qrCode: qr,
      },
    })
  }

  async findTicket(bookingId: number) {

    return this.prisma.ticket.findUnique({
      where: {
        bookingId,
      },
    })
  }
}