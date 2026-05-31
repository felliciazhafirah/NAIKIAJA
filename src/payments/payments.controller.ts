import {
  Body,
  Controller,
  Post,
} from '@nestjs/common'

import { PaymentsService } from './payments.service'

@Controller('payments')
export class PaymentsController {

  constructor(
    private service: PaymentsService,
  ) {}

  @Post()
  pay(
    @Body() body: { bookingId: number },
  ) {

    return this.service.pay(
      body.bookingId,
    )
  }
}