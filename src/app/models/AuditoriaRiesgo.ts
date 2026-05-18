import { NivelRiesgo } from './TransaccionModel';
import { Usuario } from './UsuarioModel';

export interface AuditoriaRiesgo {
  id: number;
  descripcionEvento: string;
  fecha: string;
  nivelRiesgo: NivelRiesgo;
  usuario?: Usuario;
}
