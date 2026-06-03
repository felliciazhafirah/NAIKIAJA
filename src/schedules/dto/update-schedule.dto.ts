import { ApiProperty } from '@nestjs/swagger'
export class UpdateScheduleDto {
@ApiProperty()
  origin?: string
@ApiProperty()
  destination?: string
@ApiProperty()
  departureTime?: string
@ApiProperty()
  arrivalTime?: string
@ApiProperty()
  price?: number
@ApiProperty()
  totalTickets?: number
}