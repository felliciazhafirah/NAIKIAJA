import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  Patch,
} from '@nestjs/common'

import { BookingsService } from './bookings.service'
import { Get, Param } from '@nestjs/common'
import { CreateBookingDto } from './dto/create-booking.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { ApiBearerAuth } from '@nestjs/swagger'

@Controller('bookings')
export class BookingsController {

  constructor(
    private service: BookingsService,
  ) { }


  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get('my')
  getMyBookings(@Req() req: any) {
    return this.service.getMyBookings(
      req.user.userId,
    );
  }

  @Patch(':id/pay')
async payBooking(@Param('id') id: string) {
  return this.service.payBooking(Number(id));
}
@Get(':id/invoice')
getInvoice(@Param('id') id: string) {
  return this.service.getInvoice(Number(id));
}

 @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateBookingDto) {
    return this.service.createBooking(
      dto.userId,
      dto,
    )
  }
}