import { Injectable } from '@nestjs/common';
import { Direction } from './toy-robot-direction.enum';
import { ToyRobotState } from './toy-robot-state.model';

@Injectable()
export class ToyRobotService {

  static state: ToyRobotState = {
    x: null,
    y: null,
    direction: null,
  }

  place(x: number, y: number, direction: Direction) {
    console.debug(`### PLACE X[${x}], Y[${y}], DIRECTION[${direction}]`);
  }

  move() {
    console.debug('### MOVE');
  }

  left() {
    console.debug('### LEFT');
  }

  right() {
    console.debug('### RIGHT');
  }

  report() {
    console.debug('### REPORT');

    let s = ToyRobotService.state;
    console.info(`!!! Toy Robot is at X[${s.x}], Y[${s.y}], DIRECTION[${s.direction}]`)
  }

  reset() {
    console.debug('### RESET');

    ToyRobotService.state.x = null;
    ToyRobotService.state.y = null;
    ToyRobotService.state.direction = null;
  }
}
