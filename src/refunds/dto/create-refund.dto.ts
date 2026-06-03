import { ApiProperty } from '@nestjs/swagger'
export class CreateRefundDto {

  @ApiProperty()
  bookingId: number
  @ApiProperty()
  reason: string
}