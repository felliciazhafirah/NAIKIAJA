import { ApiProperty } from '@nestjs/swagger'
export class CreateBookingDto {
 @ApiProperty()
  Namalengkap : string

  @ApiProperty()
  Email : string

  @ApiProperty()
  NoHp : string

  @ApiProperty()
  KTP : string

  @ApiProperty()
  userId: number

  @ApiProperty()
  scheduleId: number

  @ApiProperty()
  seatIds: string[]
}