// create-ticket.dto.ts

import { ApiProperty } from '@nestjs/swagger'

export class CreateTicketDto {
  @ApiProperty()
  bookingId: number
}