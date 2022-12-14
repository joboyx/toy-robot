import { Injectable, Logger } from '@nestjs/common';
import { ToyRobotService } from '../toy-robot/toy-robot.service';

@Injectable()
export class CliService {
  readonly log = new Logger('ClieService');

  constructor(
    private readonly toyRobotService: ToyRobotService,
  ) { }

  /**
   * Handler for user input from CLI/REPL
   * @param input 
   */
  handleInput(input: string) {
    let [command, params] = input.split(' ');
    switch (command) {
      case 'PLACE':
        let [x, y, direction] = (params || '').split(',');
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
      case 'RESET':
        this.toyRobotService.reset();
        break;
      default:
        console.error('Invalid command!');
        this.printHelp();
    }
    this.printTable();
    console.debug(`>>> [${input}]`);
  }

  printHelp() {
    console.info();
    console.info('Commands:');
    console.info('PLACE <X>,<Y>,<DIRECTION> -- <X> and <Y> are integers that indicate a location on the tabletop');
    console.info('                          -- <X> and <Y> are coordinates in the table with 0,0 on top-right and 4,4 is at lower-right');
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

  /**
   * Prints the 5 x 5 table in the terminal
   */
  printTable() {
    let xMax = ToyRobotService.X_MAX;
    let yMax = ToyRobotService.Y_MAX;
    let state = ToyRobotService.state;

    console.info();
    for (let i = 0; i <= xMax; i++) {
      for (let j = 0; j <= yMax; j++) {
        if (i == state.y && j == state.x) {
          process.stdout.write(`${state.direction?.symbol || '-'} `);
        } else {
          process.stdout.write('- ');
        }
      }
      console.info();
    }
    console.info();
  }
}
