"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const history_service_1 = require("./history.service");
describe('HistoryService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [history_service_1.HistoryService],
        }).compile();
        service = module.get(history_service_1.HistoryService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=history.service.spec.js.map