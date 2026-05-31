import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common'

import { TicketsService } from './tickets.service'

@Controller('tickets')
export class TicketsController {

  constructor(
    private service: TicketsService,
  ) {}

  @Post()
  generate(
    @Body() body: { bookingId: number },
  ) {

    return this.service.generate(
      body.bookingId,
    )
  }

  @Get(':bookingId')
  findTicket(
    @Param('bookingId') bookingId: number,
  ) {

    return this.service.findTicket(
      bookingId,
    )
  }
}