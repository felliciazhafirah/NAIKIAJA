import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common'

import { SeatsService } from './seats.service'

@Controller('seats')
export class SeatsController {

  constructor(
    private readonly seatsService: SeatsService,
  ) {}

  @Get(':busId')
  getSeats(
    @Param('busId', ParseIntPipe)
    busId: number,
  ) {
    return this.seatsService.getSeats(
      busId,
    )
  }
}