import { Injectable, NotFoundException} from '@nestjs/common'

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

  async getSeats(scheduleId: number) {

  const schedule =
    await this.prisma.schedule.findUnique({
      where: {
        id: scheduleId,
      },
          include: {
      bus: true,
    },

    })

  if (!schedule) {
    throw new NotFoundException(
      'Schedule not found',
    )
  }

  return this.prisma.seat.findMany({
    where: {
      busId: schedule.busId,
    },

    orderBy: {
      seatNumber: 'asc',
    },
  })
}

  async remove(id: number) {
  return this.prisma.schedule.update({
    where: {
      id,
    },

    data: {
      isActive: false,
    },
  })
}

findByClass(busClass: string) {
  return this.prisma.schedule.findMany({
    where: {
      bus: {
        class: busClass,
      },
    },

    include: {
      bus: true,
    },
  })
}

  async findByDate(date: string) {
  const startDate = new Date(date);
  const endDate = new Date(date);

  endDate.setDate(endDate.getDate() + 1);

  return this.prisma.schedule.findMany({
    where: {
      departureTime: {
        gte: startDate,
        lt: endDate,
      },
    },
    include: {
      bus: true,
    },
  });
}

  async findAll() {
    return this.prisma.schedule.findMany({
       include: {
    bus: true,
    }})
  }
}