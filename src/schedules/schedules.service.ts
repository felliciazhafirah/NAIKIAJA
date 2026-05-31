import { Injectable } from '@nestjs/common'

import { PrismaService } from '../prisma/prisma.service'
import { UpdateScheduleDto } from './dto/update-schedule.dto'
import { CreateScheduleDto } from './dto/create-schedule.dto'

@Injectable()
export class SchedulesService {

  constructor(
    private prisma: PrismaService,
  ) { }

  async create(dto: CreateScheduleDto) {

    return this.prisma.schedule.create({
      data: {
        ...dto,

        availableTickets: dto.totalTickets,
      },
    })
  }

  async update(
    id: number,
    dto: UpdateScheduleDto,
  ) {
    const schedule =
      await this.prisma.schedule.findUnique({
        where: { id },
      })

    if (!schedule) {
      throw new Error('Schedule not found')
    }

    return this.prisma.schedule.update({
      where: { id },
      data: {
        ...dto,

        availableTickets:
          dto.totalTickets ??
          schedule.availableTickets,
      },
    })
  }

  remove(id: number) {
    return this.prisma.schedule.delete({
      where: { id },
    })
  }
  
  async findAll() {
    return this.prisma.schedule.findMany({
       include: {
    bus: true,
    }})
  }
}