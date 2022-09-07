import { Injectable } from '@nestjs/common';
import { ToyRobotDirection } from './toy-robot-direction.enum';
import { ToyRobotState } from './toy-robot-state.model';

@Injectable()
export class ToyRobotService {

  static readonly X_MIN = 0;
  static readonly Y_MIN = 0;
  static readonly X_MAX = 4;
  static readonly Y_MAX = 4;

  static state: ToyRobotState = {
    x: null,
    y: null,
    direction: null,
  }

  /**
   * Adds initial state to toy-robot
   */
  place(x: number, y: number, direction: string) {
    console.debug(`### PLACE X[${x}], Y[${y}], DIRECTION[${direction}]`);

    let dir = ToyRobotDirection.parseByName(direction);
    if (this.isValidPlaceParams(x, y, dir)) {
      this.state = { x, y, direction: dir };
    } else {
      console.error('Invalid PLACE parameters');
    }
  }

  /**
   * Moves toy-robot 1 unit in direction it's facing
   * 
   * Will not move if toy-robot is at edge of grid
   */
  move() {
    console.debug('### MOVE');

    if (this.isPlaced(this.state)) {
      if (this.canMove(this.state)) {
        this.state = {
          ...this.state,
          x: this.state.x + this.state.direction.xDelta,
          y: this.state.y + this.state.direction.yDelta,
        }
      } else {
        console.error('!!! Can\'t move to that direction');
      }
    } else {
      console.error('!!! Toy Robot is not yet placed');
    }
  }

  /**
   * Rotate toy-robot counter-clockwise by updating `degrees` in state by -90°
   */
  left() {
    console.debug('### LEFT');

    if (this.isPlaced(this.state)) {
      // if degrees is already 0°/NORTH, set it to 360 to prevent negative value when subtracting
      let degrees = (this.state.direction.degrees === 0 ? 360 : this.state.direction.degrees) - 90;
      this.state = {
        ...this.state,
        direction: ToyRobotDirection.parseByDegrees(degrees),
      }
    } else {
      console.error('!!! Toy Robot is not yet placed');
    }
  }

  /**
   * Rotate toy-robot counter-clockwise by updating `degrees` in state by +90°
   */
  right() {
    console.debug('### RIGHT');

    if (this.isPlaced(this.state)) {
      // `degrees` greater than 360° can be handled by parseByDegrees below
      let degrees = this.state.direction.degrees + 90;
      this.state = {
        ...this.state,
        direction: ToyRobotDirection.parseByDegrees(degrees),
      }
    } else {
      console.error('!!! Toy Robot is not yet placed');
    }
  }

  report() {
    console.debug('### REPORT');

    let s = ToyRobotService.state;
    console.info(`!!! Toy Robot is at X[${s.x}], Y[${s.y}], DIRECTION[${s.direction?.name || null}]`)
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

  /**
   * Validates state if toy-robot can move in the direction it's facing without going over the table
   */
  private canMove(state: ToyRobotState): boolean {
    let { x, y, direction } = state;
    let xNew = x + direction.xDelta;
    let yNew = y + direction.yDelta;

    return xNew >= ToyRobotService.X_MIN && xNew <= ToyRobotService.X_MAX && yNew >= ToyRobotService.Y_MIN && yNew <= ToyRobotService.Y_MAX;
  }

  /**
   * Validates PLACE input params if x/y coordinates are within range and if direction is valid
   */
  private isValidPlaceParams(x: number, y: number, direction: ToyRobotDirection): boolean {
    return Number.isInteger(x) && Number.isInteger(y)
      && x >= ToyRobotService.X_MIN && x <= ToyRobotService.X_MAX
      && y >= ToyRobotService.Y_MIN && y <= ToyRobotService.Y_MAX
      && direction != null;
  }

  /**
   * Returns true if toy-robot have an initial state already
   */
  private isPlaced(state: ToyRobotState): boolean {
    return !!state.direction;
  }
}
