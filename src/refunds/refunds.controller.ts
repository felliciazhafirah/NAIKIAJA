import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

import { RefundsService } from './refunds.service'

import { CreateRefundDto } from './dto/create-refund.dto'

@Controller('refunds')
export class RefundsController {

  constructor(
    private service: RefundsService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateRefundDto,
  ) {

    return this.service.create(dto)
  }

  @Patch(':id/approve')
  approve(
    @Param('id') id: number,
  ) {

    return this.service.approve(id)
  }
}