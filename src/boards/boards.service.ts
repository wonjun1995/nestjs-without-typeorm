import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { Connection } from 'mysql2';
import { InjectClient } from 'nest-mysql';

interface props {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  info: string;
  serverStatus: number;
  warningStatus: number;
}

@Injectable()
export class BoardsService {
  constructor(@InjectClient() private readonly connection: Connection) {}

  async createBoard(createBoardDto: CreateBoardDto): Promise<props> {
    try {
      const sql =
        'INSERT INTO boards(title, description, status) VALUES(?,?,?)';
      const params = [
        createBoardDto.title,
        createBoardDto.description,
        createBoardDto.status,
      ];
      const board = await this.connection.query(sql, params);
      console.log(board);
      return board[0];
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async getAllBoards(): Promise<Board[]> {
    try {
      const sql = 'SELECT * FROM boards';
      const board = await this.connection.query(sql);

      return board[0];
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
