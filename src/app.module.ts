import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CliService } from './cli/cli.service';
import { ToyRobotService } from './toy-robot/toy-robot.service';
import { ToyRobotController } from './toy-robot/toy-robot.controller';

@Module({
  imports: [],
  controllers: [AppController, ToyRobotController],
  providers: [AppService, CliService, ToyRobotService],
})
export class AppModule {}
