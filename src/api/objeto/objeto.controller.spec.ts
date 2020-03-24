import { Test, TestingModule } from '@nestjs/testing';
import { ObjetoController } from './objeto.controller';

describe('Objeto Controller', () => {
  let controller: ObjetoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjetoController],
    }).compile();

    controller = module.get<ObjetoController>(ObjetoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
