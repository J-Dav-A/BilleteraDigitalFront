import { Billetera } from './BilleteraModel';
import { TipoTransaccion } from './TransaccionModel';
import { Usuario } from './UsuarioModel';

export type EstadoOperacionProgramada =
  | 'PENDIENTE'
  | 'EJECUTADA'
  | 'CANCELADA'
  | 'FALLIDA'
  | 'PROGRAMADA';

export interface OperacionProgramada {
  id: number;
  fechaFutura: string;
  tipoTransaccion: TipoTransaccion;
  monto: number;
  prioridad: number;
  descripcion: string;
  recurrente: boolean;
  diasRecurrencia: number;
  estado: EstadoOperacionProgramada;
  usuario?: Usuario;
  billeteraOrigen: Billetera;
  billeteraDestino: Billetera | null;
}
