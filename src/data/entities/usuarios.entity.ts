import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Usuarios')
export class Usuario {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column()
  nombreUsuario: string;

  @Column()
  apellido: string;

  @Column()
  correo: string;

  @Column()
  contrasena: string;

  @Column()
  telefono: string;

  @Column()
  direccion: string;
}
