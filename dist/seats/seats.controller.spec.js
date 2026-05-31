"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const seats_controller_1 = require("./seats.controller");
const seats_service_1 = require("./seats.service");
describe('SeatsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [seats_controller_1.SeatsController],
            providers: [seats_service_1.SeatsService],
        }).compile();
        controller = module.get(seats_controller_1.SeatsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=seats.controller.spec.js.map