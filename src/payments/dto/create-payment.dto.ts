// dto/create-payment.dto.ts

import { ApiProperty } from '@nestjs/swagger'

export class CreatePaymentDto {
  @ApiProperty({
    example: 1,
  })
  bookingId: number
}