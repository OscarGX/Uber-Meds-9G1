import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../../data/entities/usuarios.entity';
import { Repository } from 'typeorm';
import { UsuarioCreateDTO } from '../models/dto/usuario.create.dto';
import { UsuarioReadDTO } from '../models/dto/usuario.read.dto';
import { hashSync } from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async createUsuario(user: UsuarioCreateDTO): Promise<UsuarioReadDTO> {
    const newUser = this.usuarioRepository.create(user);
    newUser.contrasena = hashSync(newUser.contrasena, 10);
    const userDB = await this.usuarioRepository.save(newUser);
    if (userDB) {
      delete userDB.contrasena;
      return {
        ...userDB,
      };
    }
    return null;
  }
}
