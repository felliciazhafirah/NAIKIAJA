import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
export declare class HistoryController {
    private readonly historyService;
    constructor(historyService: HistoryService);
    create(createHistoryDto: CreateHistoryDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHistoryDto: UpdateHistoryDto): string;
    remove(id: string): string;
}
