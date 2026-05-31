"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRefundDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_refund_dto_1 = require("./create-refund.dto");
class UpdateRefundDto extends (0, swagger_1.PartialType)(create_refund_dto_1.CreateRefundDto) {
}
exports.UpdateRefundDto = UpdateRefundDto;
//# sourceMappingURL=update-refund.dto.js.map