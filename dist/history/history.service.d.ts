import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
export declare class HistoryService {
    create(createHistoryDto: CreateHistoryDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHistoryDto: UpdateHistoryDto): string;
    remove(id: number): string;
}
