import { Test, TestingModule } from '@nestjs/testing';
import { CliService } from 'src/cli/cli.service';
import { ToyRobotController } from './toy-robot.controller';
import { ToyRobotService } from './toy-robot.service';

describe('ToyRobotController', () => {
  let controller: ToyRobotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToyRobotController],
      providers: [CliService, ToyRobotService]
    }).compile();

    controller = module.get<ToyRobotController>(ToyRobotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
