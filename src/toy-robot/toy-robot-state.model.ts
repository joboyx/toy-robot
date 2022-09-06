import { ToyRobotDirection } from "./toy-robot-direction.enum";

export interface ToyRobotState {
  x: number;
  y: number;
  direction: ToyRobotDirection;
}
