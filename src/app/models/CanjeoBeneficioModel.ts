import { Usuario } from './UsuarioModel';
import { Beneficio } from './BeneficioModel';

export interface CanjeoBeneficio {
  id: number;
  fechaCanje: string;
  puntosUsados: number;
  usuario?: Usuario;
  beneficio?: Beneficio;
}
