import { Injectable } from '@nestjs/common'

import { PrismaService } from '../prisma/prisma.service'
import { CreateBusDto } from './dto/create-bus.dto'

@Injectable()
export class BusesService {
  constructor(private prisma: PrismaService) {}

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

   remove(id: number) {
    return this.prisma.bus.delete({
      where: { id },
    })
  }
  

  async findAll() {
    return this.prisma.bus.findMany()
  }
}