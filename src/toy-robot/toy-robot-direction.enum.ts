export class ToyRobotDirection {
  static readonly NORTH = new ToyRobotDirection('NORTH', 0, -1, 0, '^');
  static readonly SOUTH = new ToyRobotDirection('SOUTH', 0, 1, 180, 'v');
  static readonly EAST = new ToyRobotDirection('EAST', 1, 0, 90, '>');
  static readonly WEST = new ToyRobotDirection('WEST', -1, 0, 270, '<');

  private constructor(
    readonly name: string,
    /** num of units to be moved in x axis */
    readonly xDelta: number,
    /** num of units to be moved in y axis */
    readonly yDelta: number, 
    /** numerical representation of the direction, with 0° facing up/NORTH */
    readonly degrees: number,
    /** character used when printing to terminal */
    readonly symbol: string,
  ) {}

  static parseByName(direction: string): ToyRobotDirection {
    return [this.NORTH, this.SOUTH, this.EAST, this.WEST].filter(x => x.name == direction)[0];
  }

  static parseByDegrees(degress: number): ToyRobotDirection {
    return [this.NORTH, this.SOUTH, this.EAST, this.WEST].filter(x => x.degrees == degress % 360)[0];
  }
}
