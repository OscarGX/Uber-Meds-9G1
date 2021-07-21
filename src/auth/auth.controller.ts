import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { API_URL } from 'src/common/constants/routeurl';
import { AuthService } from './services/auth.service';
import { UsuarioLoginDTO } from './models/dto/usuario.login.dto';
import { Response } from 'express';

@Controller(`${API_URL}/auth`)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/user-login')
  async userLogin(@Body() userLogin: UsuarioLoginDTO, @Res() res: Response) {
    const user = await this.authService.userLogin(userLogin);
    if (user) {
      return res.status(HttpStatus.OK).json({
        ok: true,
        user,
      });
    }
    throw new HttpException(
      'Correo o contraseña incorrectos',
      HttpStatus.FORBIDDEN,
    );
  }
}
