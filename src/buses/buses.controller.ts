import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  UseGuards,
  Put,
} from '@nestjs/common'

import { BusesService } from './buses.service'
import { CreateBusDto } from './dto/create-bus.dto'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { RolesGuard } from 'src/auth/roles.guard'
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/role.enum';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UpdateBusDto } from './dto/update-bus.dto';



@Roles(Role.ADMIN)
@Controller('buses')
export class BusesController {
  constructor(private service: BusesService) { }


  @ApiBearerAuth('access-token')
   @Roles(Role.ADMIN)
   @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() dto: CreateBusDto) {
    return this.service.create(dto)
  }

  @Roles(Role.ADMIN)
  @Put(':id')
update(
  @Param('id') id: string,
  @Body() dto: UpdateBusDto,
) {
  return this.service.update(+id, dto);
}

@Roles(Role.ADMIN)
@Delete(':id')
remove(@Param('id') id: string) {
  return this.service.remove(+id);
}

@Get()
findAll() {
  return this.service.findAll();
}
}