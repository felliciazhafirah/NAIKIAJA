import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { BusesModule } from './buses/buses.module'
import { SeatsModule } from './seats/seats.module'
import { BookingsModule } from './bookings/bookings.module'
import { SchedulesModule } from './schedules/schedules.module'
import { RefundsModule } from './refunds/refunds.module'
import { PaymentsModule } from './payments/payments.module'
import { TicketsModule } from './tickets/tickets.module'


@Module({
  imports: [
    PrismaModule,
    AuthModule,
    BusesModule,
    SeatsModule,
    BookingsModule,
    SchedulesModule,
    RefundsModule,
    PaymentsModule,
    TicketsModule
  ],
})
export class AppModule {}