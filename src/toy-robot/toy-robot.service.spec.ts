import { Test, TestingModule } from '@nestjs/testing';
import { ToyRobotDirection } from './toy-robot-direction.enum';
import { ToyRobotService } from './toy-robot.service';

describe('ToyRobotService', () => {
  let service: ToyRobotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToyRobotService],
    }).compile();

    service = module.get<ToyRobotService>(ToyRobotService);

    console.info = jest.fn();
    console.error = jest.fn();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should place initial state', () => {
    service.reset();
    service.place(1, 2, 'NORTH');

    expect(ToyRobotService.state.direction).toBe(ToyRobotDirection.NORTH);
    expect(ToyRobotService.state.x).toBe(1);
    expect(ToyRobotService.state.y).toBe(2);
  });

  it('should place initial state - invalid direction', () => {
    service.reset();
    service.place(1, 2, 'XXX');

    expect(console.error).toBeCalledWith('Invalid PLACE parameters');
    expect(ToyRobotService.state.direction).toBeNull();
    expect(ToyRobotService.state.x).toBeNull();
    expect(ToyRobotService.state.y).toBeNull();
  });

  it('should place initial state - invalid coordinates', () => {
    service.reset();
    service.place(-1, 0.5, 'XXX');

    expect(console.error).toBeCalledWith('Invalid PLACE parameters');
    expect(ToyRobotService.state.direction).toBeNull();
    expect(ToyRobotService.state.x).toBeNull();
    expect(ToyRobotService.state.y).toBeNull();
  });

  it('should move', () => {
    service.reset();
    service.place(1, 2, 'SOUTH');
    service.move();

    expect(ToyRobotService.state.direction).toBe(ToyRobotDirection.SOUTH);
    expect(ToyRobotService.state.x).toBe(1);
    expect(ToyRobotService.state.y).toBe(3);
  });

  it('should move - do nothing when at edge', () => {
    service.reset();
    service.place(0, 0, 'WEST');
    service.move();

    expect(ToyRobotService.state.direction).toBe(ToyRobotDirection.WEST);
    expect(ToyRobotService.state.x).toBe(0);
    expect(ToyRobotService.state.y).toBe(0);
  });

  it('should move - invalid', () => {
    service.reset();
    service.move();

    expect(console.error).toBeCalledWith('!!! Toy Robot is not yet placed');
    expect(ToyRobotService.state.direction).toBeNull();
    expect(ToyRobotService.state.x).toBeNull();
    expect(ToyRobotService.state.y).toBeNull();
  });

  it('should rotate left', () => {
    service.reset();
    service.place(1, 2, 'EAST');
    service.left();

    expect(ToyRobotService.state.direction).toBe(ToyRobotDirection.NORTH);
    expect(ToyRobotService.state.x).toBe(1);
    expect(ToyRobotService.state.y).toBe(2);

    service.left();

    expect(ToyRobotService.state.direction).toBe(ToyRobotDirection.WEST);
    expect(ToyRobotService.state.x).toBe(1);
    expect(ToyRobotService.state.y).toBe(2);
  });

  it('should rotate left - invalid', () => {
    service.reset();
    service.left();

    expect(console.error).toBeCalledWith('!!! Toy Robot is not yet placed');
    expect(ToyRobotService.state.direction).toBeNull();
    expect(ToyRobotService.state.x).toBeNull();
    expect(ToyRobotService.state.y).toBeNull();
  });

  it('should rotate right', () => {
    service.reset();
    service.place(1, 2, 'WEST');
    service.right();

    expect(ToyRobotService.state.direction).toBe(ToyRobotDirection.NORTH);
    expect(ToyRobotService.state.x).toBe(1);
    expect(ToyRobotService.state.y).toBe(2);

    service.right();

    expect(ToyRobotService.state.direction).toBe(ToyRobotDirection.EAST);
    expect(ToyRobotService.state.x).toBe(1);
    expect(ToyRobotService.state.y).toBe(2);
  });

  it('should rotate right - invalid', () => {
    service.reset();
    service.right();

    expect(console.error).toBeCalledWith('!!! Toy Robot is not yet placed');
    expect(ToyRobotService.state.direction).toBeNull();
    expect(ToyRobotService.state.x).toBeNull();
    expect(ToyRobotService.state.y).toBeNull();
  });

  it('should report state - invalid state', () => {
    service.reset();
    service.report();

    expect(console.info).toHaveBeenCalledWith('!!! Toy Robot is at X[null], Y[null], DIRECTION[null]');
  });

  it('should report state - valid state', () => {
    service.place(1, 1, 'NORTH');
    service.report();

    expect(console.info).toHaveBeenCalledWith('!!! Toy Robot is at X[1], Y[1], DIRECTION[NORTH]');
  });

  it('should reset state', () => {
    service.reset();

    expect(ToyRobotService.state.direction).toBeNull();
    expect(ToyRobotService.state.x).toBeNull();
    expect(ToyRobotService.state.y).toBeNull();
  });
});
