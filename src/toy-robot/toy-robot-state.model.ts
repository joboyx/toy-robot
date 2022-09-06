import { Direction } from "./toy-robot-direction.enum";

export interface ToyRobotState {
  x: number;
  y: number;
  direction: Direction;
}
