import { Module } from '@nestjs/common';
import { MysqlModule } from 'nest-mysql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [
    MysqlModule.forRoot({
      host: 'localhost',
      database: 'board_app',
      user: 'root',
      password: '1234',
      port: 3306,
    }),
    BoardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
