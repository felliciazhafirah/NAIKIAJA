import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param
} from '@nestjs/common'

import { BusesService } from './buses.service'
import { CreateBusDto } from './dto/create-bus.dto'

@Controller('buses')
export class BusesController {
  constructor(private service: BusesService) {}

  @Post()
  create(@Body() dto: CreateBusDto) {
    return this.service.create(dto)
  }

  @Delete(':id')
    remove(@Param('id') id: string) {
      return this.service.remove(Number(id))
    }
  

  @Get()
  findAll() {
    return this.service.findAll()
  }
}