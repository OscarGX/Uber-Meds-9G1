import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { API_URL } from 'src/common/constants/routeurl';
import { MedicamentosService } from './services/medicamentos.service';

@Controller(`${API_URL}/medicamentos`)
export class MedicamentosController {
  constructor(private readonly medicamentosService: MedicamentosService) {}

  @Get('')
  async getMedicamentos(@Res() res: Response) {
    const medicamentos = await this.medicamentosService.getMedicamentos();
    if (medicamentos) {
      return res.status(HttpStatus.OK).json({
        ok: true,
        medicamentos,
      });
    }
    throw new HttpException(
      'Something went wrong',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  @Get(':id')
  async getMedicamentoById(
    @Res() res: Response,
    @Param('id', ParseIntPipe) id: number,
  ) {
    if (await this.medicamentosService.medicamentoExists(id)) {
      throw new HttpException('Medicamento not found', HttpStatus.NOT_FOUND);
    }
    const medicamento = await this.medicamentosService.getMedicamentoById(id);
    return res.status(HttpStatus.OK).json({
      ok: true,
      medicamento,
    });
  }
}
