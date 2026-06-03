import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
  providers: [NotificationService, PrismaService],
  controllers: [NotificationController],
  exports: [NotificationService], // 👈 WAJIB ADA INI
})
export class NotificationModule {}
