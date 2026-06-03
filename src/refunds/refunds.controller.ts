import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  UseGuards,
  Get,
  Req,
} from '@nestjs/common'

import { RefundsService } from './refunds.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { RolesGuard } from '../auth/roles.guard'
import { Roles } from '../auth/roles.decorator'
import { Role } from 'src/auth/role.enum'
import { ApiBearerAuth } from '@nestjs/swagger'

import { CreateRefundDto } from './dto/create-refund.dto'
import { Query } from '@nestjs/common'

@Controller('refund')
export class RefundsController {

  constructor(
    private service: RefundsService,
  ) { }

  @ApiBearerAuth('access-token')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  findAll(@Query('status') status?: string) {
    return this.service.findAll(status);
  }

   @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() dto: CreateRefundDto,
  ) {

    return this.service.create(dto)
  }

  

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get('my')
  findMyRefund(@Req() req: any) {
    return this.service.findMyRefunds(
      req.user.userId,
    );
  }

  @Get(':id')
findOne(@Param('id') id: string) {
  return this.service.findOne(Number(id));
}

  @ApiBearerAuth('access-token')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id/approve')
  approve(
    @Param('id') id: number,
  ) {

    return this.service.approve(id)
  }
}