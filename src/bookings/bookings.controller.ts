import {
  Body,
  Controller,
  Post,
} from '@nestjs/common'

import { BookingsService } from './bookings.service'

import { CreateBookingDto } from './dto/create-booking.dto'

@Controller('bookings')
export class BookingsController {

  constructor(
    private service: BookingsService,
  ) {}

  @Post()
  create(@Body() dto: CreateBookingDto) {
    return this.service.createBooking(
      1,
      dto,
    )
  }
}