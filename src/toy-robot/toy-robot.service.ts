import { Injectable } from '@nestjs/common';
import { ToyRobotDirection } from './toy-robot-direction.enum';
import { ToyRobotState } from './toy-robot-state.model';

@Injectable()
export class ToyRobotService {

  private static state: ToyRobotState = {
    x: null,
    y: null,
    direction: null,
  }

  place(x: number, y: number, direction: string) {
    console.debug(`### PLACE X[${x}], Y[${y}], DIRECTION[${direction}]`);

    this.state = { x, y, direction: ToyRobotDirection.parseByName(direction) };
  }

  move() {
    console.debug('### MOVE');

    this.state = {
      ...this.state,
      x: this.state.x + this.state.direction.xDelta,
      y: this.state.y + this.state.direction.yDelta,
    }
  }

  left() {
    console.debug('### LEFT');

    let degrees = (this.state.direction.degrees === 0 ? 360 : this.state.direction.degrees) - 90;
    this.state = {
      ...this.state,
      direction: ToyRobotDirection.parseByDegrees(degrees),
    }
  }

  right() {
    console.debug('### RIGHT');

    let degrees = this.state.direction.degrees + 90;
    this.state = {
      ...this.state,
      direction: ToyRobotDirection.parseByDegrees(degrees),
    }
  }

  report() {
    console.debug('### REPORT');

    let s = ToyRobotService.state;
    console.info(`!!! Toy Robot is at X[${s.x}], Y[${s.y}], DIRECTION[${s.direction?.name}]`)
  }

  reset() {
    console.debug('### RESET');

    this.state = {
      x: null,
      y: null,
      direction: null,
    };
  }

  private get state(): ToyRobotState {
    return ToyRobotService.state;
  }

  private set state(val: ToyRobotState) {
    ToyRobotService.state = val;
  }
}
