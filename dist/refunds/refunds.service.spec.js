"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const refunds_service_1 = require("./refunds.service");
describe('RefundsService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [refunds_service_1.RefundsService],
        }).compile();
        service = module.get(refunds_service_1.RefundsService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=refunds.service.spec.js.map