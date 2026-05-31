import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common'

import { SchedulesService } from './schedules.service'
import { UpdateScheduleDto } from './dto/update-schedule.dto'
import { CreateScheduleDto } from './dto/create-schedule.dto'

@Controller('schedules')
export class SchedulesController {

  constructor(
    private readonly schedulesService: SchedulesService,
  ) { }

  @Post()
  create(@Body() dto: CreateScheduleDto) {
    return this.schedulesService.create(dto)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateScheduleDto,
  ) {
    return this.schedulesService.update(
      Number(id),
      dto,
    )
  }

 @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schedulesService.remove(Number(id))
  }

  @Get()
  findAll() {
    return this.schedulesService.findAll()
  }
}