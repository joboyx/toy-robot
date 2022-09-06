import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CliService {
  readonly log = new Logger('ClieService');

  constructor() {}

  static handleInput(input: string) {
    switch(input) {
      case 'PLACE':
        console.info('### PLACE');
        break;
      case 'MOVE':
        console.info('### MOVE');
        break;
      case 'LEFT':
        console.info('### LEFT');
        break;
      case 'RIGHT':
        console.info('### RIGHT');
        break;
      case 'REPORT':
        console.info('### REPORT');
        break;
      default:
        this.printHelp();
    }
    console.debug(`>>> [${input}]`);
  }

  private static printHelp() {
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
