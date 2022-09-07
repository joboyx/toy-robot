import { Controller, Get, Param } from '@nestjs/common';
import { CliService } from '../cli/cli.service';
import { ToyRobotService } from './toy-robot.service';

@Controller('toy-robot')
export class ToyRobotController {
  constructor(
    private readonly toyRobotService: ToyRobotService,
    private readonly cliService: CliService,
  ) { }

  @Get('place/:x/:y/:direction')
  getPlace(@Param('x') x: string, @Param('y') y: string, @Param('direction') direction: string) {
    console.debug(`### PLACE X[${x}], Y[${y}], DIRECTION[${direction}]`);

    this.toyRobotService.place(+x, +y, direction);
    this.cliService.printTable();
    return 'Success';
  }

  @Get('move')
  getMove() {
    this.toyRobotService.move();
    this.cliService.printTable();
    return 'Success';
  }

  @Get('left')
  getLeft() {
    this.toyRobotService.left();
    this.cliService.printTable();
    return 'Success';
  }

  @Get('right')
  getRight() {
    this.toyRobotService.right();
    this.cliService.printTable();
    return 'Success';
  }

  @Get('report')
  getReport() {
    this.toyRobotService.report();
    this.cliService.printTable();
    return 'Success';
  }

  @Get('reset')
  getReset() {
    this.toyRobotService.report();
    this.cliService.printTable();
    return 'Success';
  }

}
