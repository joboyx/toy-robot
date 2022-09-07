import { Test, TestingModule } from '@nestjs/testing';
import { ToyRobotService } from 'src/toy-robot/toy-robot.service';
import { CliService } from './cli.service';

describe('CliService', () => {
  let service: CliService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CliService, ToyRobotService],
    }).compile();

    service = module.get<CliService>(CliService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
