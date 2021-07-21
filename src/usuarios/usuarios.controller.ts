import {
  Body,
  Controller,
  Post,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { API_URL } from 'src/common/constants/routeurl';
import { UsuariosService } from './services/usuarios.service';
import { UsuarioCreateDTO } from './models/dto/usuario.create.dto';
import { Response } from 'express';

@Controller(`${API_URL}/usuarios`)
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async createUsuario(@Body() user: UsuarioCreateDTO, @Res() res: Response) {
    const userDB = await this.usuariosService.createUsuario(user);
    if (userDB) {
      return res.status(HttpStatus.OK).json({
        ok: true,
        user: userDB,
      });
    }
    throw new HttpException(
      'Something went wrong',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
