import { Test, TestingModule } from '@nestjs/testing';
import { ToyRobotController } from './toy-robot.controller';

describe('ToyRobotController', () => {
  let controller: ToyRobotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToyRobotController],
    }).compile();

    controller = module.get<ToyRobotController>(ToyRobotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
