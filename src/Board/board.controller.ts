import { Body, Controller, Get, Post } from "@nestjs/common";
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get(':id')
  getFullDate(): string {
    return this.boardService.getFullDate();
  }

  @Post()
  async createBoard(@Body() body) {
    return this.boardService.createBoard(body);
  }
}
