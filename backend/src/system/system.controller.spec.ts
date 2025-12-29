import { Test, TestingModule } from '@nestjs/testing';
import { SystemController } from './system.controller';
import { SystemService } from './system.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

describe('SystemController', () => {
  let controller: SystemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule.forRoot()],
      controllers: [SystemController],
      providers: [SystemService],
    }).compile();

    controller = module.get<SystemController>(SystemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
