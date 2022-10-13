import { BoardStatus } from './board-status.enum';

export class Board {
  ID: number;

  title: string;

  description: string;

  status: BoardStatus;
}
