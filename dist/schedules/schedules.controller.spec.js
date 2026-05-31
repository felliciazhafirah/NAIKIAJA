"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const schedules_controller_1 = require("./schedules.controller");
const schedules_service_1 = require("./schedules.service");
describe('SchedulesController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [schedules_controller_1.SchedulesController],
            providers: [schedules_service_1.SchedulesService],
        }).compile();
        controller = module.get(schedules_controller_1.SchedulesController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=schedules.controller.spec.js.map