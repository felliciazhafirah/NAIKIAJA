"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const seats_service_1 = require("./seats.service");
describe('SeatsService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [seats_service_1.SeatsService],
        }).compile();
        service = module.get(seats_service_1.SeatsService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=seats.service.spec.js.map