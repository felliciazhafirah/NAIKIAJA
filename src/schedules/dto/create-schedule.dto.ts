import { ApiProperty } from '@nestjs/swagger'
export class CreateScheduleDto {
    @ApiProperty()
  origin: string

  @ApiProperty()
  destination: string

  @ApiProperty()
  departureTime: Date

  @ApiProperty()
  arrivalTime: Date

  @ApiProperty()
  price: number

  @ApiProperty()
  totalTickets: number

  @ApiProperty()
  busId: number
}