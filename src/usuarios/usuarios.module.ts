import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './services/usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../data/entities/usuarios.entity';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  imports: [TypeOrmModule.forFeature([Usuario])],
})
export class UsuariosModule {}
