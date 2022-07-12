import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get(':id')
  getFullDate(): string {
    return this.boardService.getFullDate();
  }

  // param
  @Post(':id')
  async createBoard(@Body() body, @Param() param) {
    return this.boardService.createBoard(body, param);
  }
}
