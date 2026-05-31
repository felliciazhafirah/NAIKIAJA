"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const refunds_controller_1 = require("./refunds.controller");
const refunds_service_1 = require("./refunds.service");
describe('RefundsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [refunds_controller_1.RefundsController],
            providers: [refunds_service_1.RefundsService],
        }).compile();
        controller = module.get(refunds_controller_1.RefundsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=refunds.controller.spec.js.map