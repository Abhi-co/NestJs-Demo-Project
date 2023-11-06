import { Test, TestingModule } from '@nestjs/testing';
import { SoftwareEngService } from './software-eng.service';

describe('SoftwareEngService', () => {
  let service: SoftwareEngService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoftwareEngService],
    }).compile();

    service = module.get<SoftwareEngService>(SoftwareEngService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
