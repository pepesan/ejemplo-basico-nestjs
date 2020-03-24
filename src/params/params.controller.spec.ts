import { Test, TestingModule } from '@nestjs/testing';
import { ParamsController } from './params.controller';

describe('Params Controller', () => {
  let controller: ParamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParamsController],
    }).compile();

    controller = module.get<ParamsController>(ParamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
