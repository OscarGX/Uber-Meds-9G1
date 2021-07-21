import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../../data/entities/usuarios.entity';
import { Repository } from 'typeorm';
import { UsuarioLoginDTO } from '../models/dto/usuario.login.dto';
import { compareSync } from 'bcrypt';
import { UsuarioReadDTO } from '../../usuarios/models/dto/usuario.read.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async userLogin(user: UsuarioLoginDTO): Promise<UsuarioReadDTO> {
    const dbUser = await this.usuarioRepository.findOne({
      where: { correo: user.correo },
    });
    if (!dbUser) {
      return null;
    }
    if (compareSync(user.contrasena, dbUser.contrasena)) {
      delete dbUser.contrasena;
      return { ...dbUser };
    }
    return null;
  }
}
