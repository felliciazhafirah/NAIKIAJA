import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
  Req,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('notifications')
export class NotificationController {
  constructor(private service: NotificationService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req) {
    return this.service.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}