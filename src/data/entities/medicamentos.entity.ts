import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from './categorias.entity';
import { Farmacia } from './farmacias.entity';

@Entity('Medicamentos')
export class Medicamento {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column({
    type: 'float',
  })
  precio: number;

  @Column({
    type: 'int',
  })
  stock: number;

  @Column()
  imagePath: string;

  @ManyToOne(() => Categoria, (category) => category.id)
  categoria: Categoria;

  @ManyToOne(() => Farmacia, (farmacia) => farmacia.id)
  farmacia: Farmacia;
}
