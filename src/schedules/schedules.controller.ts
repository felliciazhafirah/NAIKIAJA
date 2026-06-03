import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param, 
  Delete,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common'

import { SchedulesService } from './schedules.service'
import { UpdateScheduleDto } from './dto/update-schedule.dto'
import { CreateScheduleDto } from './dto/create-schedule.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { RolesGuard } from '../auth/roles.guard'
import { Roles } from '../auth/roles.decorator'
import { Role } from 'src/auth/role.enum'
import { ApiBearerAuth } from '@nestjs/swagger'

@Controller('schedules')
export class SchedulesController {

  constructor(
    private readonly schedulesService: SchedulesService,
  ) { }

  @ApiBearerAuth('access-token')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() dto: CreateScheduleDto) {
    return this.schedulesService.create(dto)
  }


  @ApiBearerAuth('access-token')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
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

  @ApiBearerAuth('access-token')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schedulesService.remove(Number(id))
  }

  @Get()
  findAll() {
    return this.schedulesService.findAll()
  }

@Get('class/:busClass')
findByClass(
  @Param('busClass')
  busClass: string,
) {
  return this.schedulesService.findByClass(
    busClass,
  )
}

  @Get('date/:date')
findByDate(
  @Param('date') date: string,
) {
  return this.schedulesService.findByDate(date);
}

  @Get(':scheduleId/seats')
  getSeats(
    @Param('scheduleId', ParseIntPipe)
    scheduleId: number,
  ) {
    return this.schedulesService.getSeats(
      scheduleId,
    )
  }
}