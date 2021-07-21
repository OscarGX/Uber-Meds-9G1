import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medicamento } from '../../data/entities/medicamentos.entity';
import { MedicamentoReadDTO } from '../models/dto/medicamento.read.dto';

@Injectable()
export class MedicamentosService {
  constructor(
    @InjectRepository(Medicamento)
    private readonly medicamentoRepository: Repository<Medicamento>,
  ) {}

  async getMedicamentos(): Promise<MedicamentoReadDTO[]> {
    const medicamentos = await this.medicamentoRepository.find({
      relations: ['categoria', 'farmacia'],
    });
    return medicamentos ? medicamentos : null;
  }

  async getMedicamentoById(id: number): Promise<MedicamentoReadDTO> {
    const medicamento = await this.medicamentoRepository.findOne(id, {
      relations: ['categoria', 'farmacia'],
    });
    return medicamento ? medicamento : null;
  }

  async medicamentoExists(id: number): Promise<boolean> {
    const medicamento = await this.medicamentoRepository.findOne(id);
    return medicamento === undefined;
  }
}
