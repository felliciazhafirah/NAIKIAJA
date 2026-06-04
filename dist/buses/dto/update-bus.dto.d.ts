import { CreateBusDto } from './create-bus.dto';
declare const UpdateBusDto_base: import("@nestjs/common").Type<Partial<CreateBusDto>>;
export declare class UpdateBusDto extends UpdateBusDto_base {
    name: string;
    class: string;
    totalSeats: number;
    facilities: string;
}
export {};
