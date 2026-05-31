import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class SeatsService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async getSeats(busId: number) {
    return this.prisma.seat.findMany({
      where: {
        busId,
      },
    })
  }
}