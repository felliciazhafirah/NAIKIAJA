"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const history_controller_1 = require("./history.controller");
const history_service_1 = require("./history.service");
describe('HistoryController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [history_controller_1.HistoryController],
            providers: [history_service_1.HistoryService],
        }).compile();
        controller = module.get(history_controller_1.HistoryController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=history.controller.spec.js.map