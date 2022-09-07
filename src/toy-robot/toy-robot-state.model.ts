import { ToyRobotDirection } from "./toy-robot-direction.enum";

export interface ToyRobotState {
  /** x coordinate */
  x: number;
  /** y coordinate */
  y: number;
  /** direction in 2d plane */
  direction: ToyRobotDirection;
}
