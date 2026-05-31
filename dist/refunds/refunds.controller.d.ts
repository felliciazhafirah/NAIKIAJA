import { RefundsService } from './refunds.service';
import { CreateRefundDto } from './dto/create-refund.dto';
export declare class RefundsController {
    private service;
    constructor(service: RefundsService);
    create(dto: CreateRefundDto): Promise<{
        reason: string;
        status: string;
        id: number;
        bookingId: number;
    }>;
    approve(id: number): Promise<{
        reason: string;
        status: string;
        id: number;
        bookingId: number;
    }>;
}
