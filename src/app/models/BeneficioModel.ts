import { NivelUsuario } from './UsuarioModel';

export interface Beneficio {
  id: number;
  descripcion: string;
  puntosNecesarios: number;
  nivelRequerido: NivelUsuario;
  activo: boolean;
}
