import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ReportsController } from './reports.controller';

@Injectable()
export class ReportsService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async getGlobalLastUpdate() {
  const [schedule, booking, refund, bus] = await Promise.all([
    this.prisma.schedule.findFirst({ orderBy: { updatedAt: 'desc' } }),
    this.prisma.booking.findFirst({ orderBy: { updatedAt: 'desc' } }),
    this.prisma.refund.findFirst({ orderBy: { updatedAt: 'desc' } }),
    this.prisma.bus.findFirst({ orderBy: { updatedAt: 'desc' } }),
  ]);

  const dates = [
    schedule?.updatedAt,
    booking?.updatedAt,
    refund?.updatedAt,
    bus?.updatedAt,
  ].filter(Boolean);

  return new Date(Math.max(...dates.map(d => new Date(d).getTime())));
}
  async getSummary() {
  const totalUsers =
    await this.prisma.user.count();

  const totalBuses =
    await this.prisma.bus.count();

  const totalSchedules =
    await this.prisma.schedule.count();

  const totalBookings =
    await this.prisma.booking.count();

  const totalTickets =
    await this.prisma.ticket.count();

  const totalRefunds =
    await this.prisma.refund.count();

  return {
    totalUsers,
    totalBuses,
    totalSchedules,
    totalBookings,
    totalTickets,
    totalRefunds,
    
  };
}
}