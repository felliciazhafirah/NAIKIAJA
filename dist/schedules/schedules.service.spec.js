"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const schedules_service_1 = require("./schedules.service");
describe('SchedulesService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [schedules_service_1.SchedulesService],
        }).compile();
        service = module.get(schedules_service_1.SchedulesService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=schedules.service.spec.js.map