import { Injectable, Logger } from '@nestjs/common';
import { ToyRobotDirection } from 'src/toy-robot/toy-robot-direction.enum';
import { ToyRobotService } from 'src/toy-robot/toy-robot.service';

@Injectable()
export class CliService {
  readonly log = new Logger('ClieService');

  constructor(
    private readonly toyRobotService: ToyRobotService,
  ) { }

  handleInput(input: string) {
    let [command, params] = input.split(' ');
    switch (command) {
      case 'PLACE':
        let [x, y, direction] = params.split(',');
        this.toyRobotService.place(+x, +y, direction);
        break;
      case 'MOVE':
        this.toyRobotService.move();
        break;
      case 'LEFT':
        this.toyRobotService.left();
        break;
      case 'RIGHT':
        this.toyRobotService.right();
        break;
      case 'REPORT':
        this.toyRobotService.report();
        break;
      default:
        this.printHelp();
    }
    console.debug(`>>> [${input}]`);
  }

  private printHelp() {
    console.info('Commands:');
    console.info('PLACE <X>,<Y>,<DIRECTION> -- <X> and <Y> are integers that indicate a location on the tabletop');
    console.info('                          -- <DIRECTION> is a string indicating which direction the robot should face');
    console.info('                          -- <DIRECTION> can be "NORTH", "EAST", "SOUTH", or "WEST"');
    console.info();
    console.info('MOVE                      -- Instructs the robot to move 1 square in the direction it is facing');
    console.info();
    console.info('LEFT                      -- Instructs the robot to rotate 90° anticlockwise/counterclockwise');
    console.info();
    console.info('RIGHT                     -- Instructs the robot to rotate 90° clockwise');
    console.info();
    console.info('REPORT                    -- Outputs the robot\'s current location on the tabletop and the direction it is facing');
    console.info();
    console.info('RESET                     -- Resets the toy robot');
    console.info();
  }
}
