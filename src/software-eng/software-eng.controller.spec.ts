import { Test, TestingModule } from '@nestjs/testing';
import { SoftwareEngController } from './software-eng.controller';

describe('SoftwareEngController', () => {
  let controller: SoftwareEngController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoftwareEngController],
    }).compile();

    controller = module.get<SoftwareEngController>(SoftwareEngController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
