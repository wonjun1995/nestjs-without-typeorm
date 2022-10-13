import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';

interface props {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  info: string;
  serverStatus: number;
  warningStatus: number;
}

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  createBoard(@Body() createboardDto: CreateBoardDto): Promise<props> {
    return this.boardsService.createBoard(createboardDto);
  }

  @Get()
  getAllBoards(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }
}
