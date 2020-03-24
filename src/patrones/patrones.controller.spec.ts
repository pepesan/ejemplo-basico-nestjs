import { Test, TestingModule } from '@nestjs/testing';
import { PatronesController } from './patrones.controller';

describe('Patrones Controller', () => {
  let controller: PatronesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatronesController],
    }).compile();

    controller = module.get<PatronesController>(PatronesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
