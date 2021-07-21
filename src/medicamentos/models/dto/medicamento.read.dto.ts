import { CategoriaReadDTO } from '../../../categorias/models/dto/categoria.read.dto';
import { FarmaciaReadDTO } from '../../../farmacias/models/dto/farmacia.read.dto';
export class MedicamentoReadDTO {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagePath: string;
  categoria: CategoriaReadDTO;
  farmacia: FarmaciaReadDTO;
}
