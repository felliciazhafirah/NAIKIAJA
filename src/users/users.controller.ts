import {
  Controller,
  Get,
  UseGuards
} from '@nestjs/common'

import { UsersService } from './users.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { RolesGuard } from '../auth/roles.guard'
import { Roles } from '../auth/roles.decorator'
import { Role } from 'src/auth/role.enum'
import { ApiBearerAuth } from '@nestjs/swagger'

@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(
    private readonly service: UsersService,
  ) {}


@ApiBearerAuth('access-token')
@Roles(Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
@Get()
findAll() {
  return this.service.findAll();
}
}