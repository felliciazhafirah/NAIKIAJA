import { PaymentsService } from './payments.service';
export declare class PaymentsController {
    private service;
    constructor(service: PaymentsService);
    pay(body: {
        bookingId: number;
    }): Promise<{
        message: string;
    }>;
}
