import { Usuario } from './UsuarioModel';

export type TipoAlerta =
  | 'SALDO_BAJO'
  | 'OPERACION_RECHAZADA'
  | 'ASCENSO_NIVEL'
  | 'PAGO_PROGRAMADO'
  | 'OPERACION_PROGRAMADA_PROXIMA'
  | 'CANJE_BENEFICIO'
  | 'INFO'
  | 'OPERACION_EXITOSA'
  | 'ALERTA_SEGURIDAD';

export interface Alerta {
  id: number;
  mensaje: string;
  tipoAlerta: TipoAlerta;
  fecha: string;
  leida: boolean;
  usuario?: Usuario;
}
