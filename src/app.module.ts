import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CliService } from './cli/cli.service';
import { ToyRobotService } from './toy-robot/toy-robot.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CliService, ToyRobotService],
})
export class AppModule {}
