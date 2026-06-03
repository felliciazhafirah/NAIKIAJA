import { Module } from '@nestjs/common'
import { NotificationModule } from '../notification/notification.module';
import { RefundsController } from './refunds.controller'
import { RefundsService } from './refunds.service'

@Module({
    imports: [NotificationModule],
  controllers: [RefundsController],
  providers: [RefundsService],
})
export class RefundsModule {}