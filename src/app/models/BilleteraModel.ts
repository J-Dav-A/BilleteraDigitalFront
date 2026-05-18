import { Usuario } from './UsuarioModel';

export type TipoBilletera =
  | 'AHORRO'
  | 'GASTOS_DIARIOS'
  | 'COMPRAS'
  | 'TRANSPORTE'
  | 'INVERSION'
  | 'SUSCRIPCION';

export interface Billetera {
  id: number;
  nombre: string;
  tipoBilletera: TipoBilletera;
  saldo: number;
  limiteTransaccion: number;
  activa: boolean;
  usuario?: Usuario;
}
