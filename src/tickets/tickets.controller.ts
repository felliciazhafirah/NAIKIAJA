import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common'

import { TicketsService } from './tickets.service'
import { CreateTicketDto } from './dto/create-ticket.dto'

@Controller('tickets')
export class TicketsController {
  constructor(
    private readonly ticketsService: TicketsService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateTicketDto,
  ) {
    return this.ticketsService.generate(
      dto.bookingId,
    )
  }

  @Get(':bookingId')
  findOne(
    @Param('bookingId') bookingId: string,
  ) {
    return this.ticketsService.findTicket(
      Number(bookingId),
    )
  }
}