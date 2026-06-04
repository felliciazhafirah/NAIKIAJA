import { PartialType } from '@nestjs/swagger';
import { CreateBusDto } from './create-bus.dto';
import { ApiProperty } from '@nestjs/swagger'

export class UpdateBusDto extends PartialType(CreateBusDto) {
      @ApiProperty()
      name: string
      
      @ApiProperty()
      class: string
    
      @ApiProperty()
      totalSeats: number
    
      @ApiProperty()
      facilities: string
}
