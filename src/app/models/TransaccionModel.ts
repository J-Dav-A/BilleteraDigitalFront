import { Billetera } from './BilleteraModel';

export type TipoTransaccion = 'RECARGA' | 'RETIRO' | 'TRANSFERENCIA' | 'PAGO_PROGRAMADO';
export type EstadoTransaccion =
  | 'COMPLETADA'
  | 'REVERTIDA'
  | 'FALLIDA'
  | 'PENDIENTE'
  | 'EJECUTADA'
  | 'CANCELADA';
export type NivelRiesgo = 'NINGUNO' | 'BAJO' | 'MEDIO' | 'ALTO' | 'CRITICO';

export interface Transaccion {
  pid: number;
  fecha: string;
  tipoTransaccion: TipoTransaccion;
  valor: number;
  estado: EstadoTransaccion;
  puntosGenerados: number;
  nivelRiesgo: NivelRiesgo;
  billeteraOrigen: Billetera | null;
  billeteraDestino: Billetera | null;
  operacionProgramada?: any | null;
  auditoriaRiesgo?: any | null;
}
