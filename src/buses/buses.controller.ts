import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common'

import { BusesService } from './buses.service'
import { CreateBusDto } from './dto/create-bus.dto'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { RolesGuard } from 'src/auth/roles.guard'
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/role.enum';
import { ApiBearerAuth } from '@nestjs/swagger'


@Roles(Role.ADMIN)
@Controller('buses')
export class BusesController {
  constructor(private service: BusesService) { }


  @ApiBearerAuth('access-token')
   @Roles(Role.ADMIN)
   @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() dto: CreateBusDto) {
    return this.service.create(dto)
  }

   @ApiBearerAuth('access-token')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.service.remove(Number(id))
  }


  @Get()
  findAll() {
    return this.service.findAll()
  }
}