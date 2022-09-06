import { Test, TestingModule } from '@nestjs/testing';
import { ToyRobotService } from './toy-robot.service';

describe('ToyRobotService', () => {
  let service: ToyRobotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToyRobotService],
    }).compile();

    service = module.get<ToyRobotService>(ToyRobotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
