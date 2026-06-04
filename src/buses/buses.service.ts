import { Injectable } from '@nestjs/common'

import { PrismaService } from '../prisma/prisma.service'
import { CreateBusDto } from './dto/create-bus.dto'
import { UpdateBusDto } from './dto/update-bus.dto'

@Injectable()
export class BusesService {
  constructor(private prisma: PrismaService) { }

  async create(dto: CreateBusDto) {
    const bus = await this.prisma.bus.create({
      data: dto,
    })

    const seats = []

    for (let i = 1; i <= dto.totalSeats; i++) {
      seats.push({
        seatNumber: `A${i}`,
        busId: bus.id,
      })
    }

    await this.prisma.seat.createMany({
      data: seats,
    })

    return bus
  }

  

  async remove(id: number) {
    return this.prisma.bus.update({
      where: {
        id,
      },

      data: {
        isActive: false,
      },
    })
  }


  async update(
  id: number,
  dto: UpdateBusDto,
) {
  return this.prisma.bus.update({
    where: { id },
    data: dto,
  });
}


  async findAll(busClass?: string) {
  return this.prisma.bus.findMany({
    where: busClass
      ? {
          class: busClass,
        }
      : {},
  })
}
}