export class ToyRobotDirection {
  static readonly NORTH = new ToyRobotDirection('NORTH', 0, 1, 0);
  static readonly SOUTH = new ToyRobotDirection('SOUTH', 0, -1, 180);
  static readonly EAST = new ToyRobotDirection('EAST', 1, 0, 90);
  static readonly WEST = new ToyRobotDirection('WEST', -1, 0, 270);

  private constructor(
    readonly name: string,
    readonly xDelta: number,
    readonly yDelta: number, 
    readonly degrees: number,
  ) {}

  static parseByName(direction: string): ToyRobotDirection {
    return [this.NORTH, this.SOUTH, this.EAST, this.WEST].filter(x => x.name == direction)[0];
  }

  static parseByDegrees(degress: number): ToyRobotDirection {
    return [this.NORTH, this.SOUTH, this.EAST, this.WEST].filter(x => x.degrees == degress % 360)[0];
  }
}
