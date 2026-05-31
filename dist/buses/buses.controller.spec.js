"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const buses_controller_1 = require("./buses.controller");
const buses_service_1 = require("./buses.service");
describe('BusesController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [buses_controller_1.BusesController],
            providers: [buses_service_1.BusesService],
        }).compile();
        controller = module.get(buses_controller_1.BusesController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=buses.controller.spec.js.map