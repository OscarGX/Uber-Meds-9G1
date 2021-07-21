import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Categorias')
export class Categoria {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;
}
