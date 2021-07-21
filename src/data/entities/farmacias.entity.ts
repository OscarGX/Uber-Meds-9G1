import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Farmacias')
export class Farmacia {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;
}
