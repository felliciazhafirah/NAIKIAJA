"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const buses_service_1 = require("./buses.service");
describe('BusesService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [buses_service_1.BusesService],
        }).compile();
        service = module.get(buses_service_1.BusesService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=buses.service.spec.js.map