import { ApiProperty } from '@nestjs/swagger'
export class CreateBusDto {
  @ApiProperty()
  name: string
  
  @ApiProperty()
  class: string

  @ApiProperty()
  totalSeats: number

  @ApiProperty()
  facilities: string
}