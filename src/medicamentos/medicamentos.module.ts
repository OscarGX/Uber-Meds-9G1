import { Module } from '@nestjs/common';
import { MedicamentosController } from './medicamentos.controller';
import { MedicamentosService } from './services/medicamentos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicamento } from '../data/entities/medicamentos.entity';

@Module({
  controllers: [MedicamentosController],
  providers: [MedicamentosService],
  imports: [TypeOrmModule.forFeature([Medicamento])],
})
export class MedicamentosModule {}
