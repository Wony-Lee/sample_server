import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  getFullDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }
  createBoard(body, param): any {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    console.log(body, param, `date : ${year} ${month} ${day}`);
  }
}
