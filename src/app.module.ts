import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Usuario } from './data/entities/usuarios.entity';
import { Categoria } from './data/entities/categorias.entity';
import { Medicamento } from './data/entities/medicamentos.entity';
import { Farmacia } from './data/entities/farmacias.entity';
import { MedicamentosModule } from './medicamentos/medicamentos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MedicamentosModule,
    UsuariosModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'sistemamedicamentos',
      entities: [Usuario, Categoria, Medicamento, Farmacia],
      synchronize: false,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
