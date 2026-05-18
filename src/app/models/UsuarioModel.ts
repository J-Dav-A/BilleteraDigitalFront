export type NivelUsuario = 'BRONCE' | 'PLATA' | 'ORO' | 'PLATINO';

export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  password?: string;
  puntos: number;
  nivelUsuario: NivelUsuario;
  fechaRegistro: string;
  activo: boolean;
  billeteras?: any[];
  alertas?: any[];
  canjeos?: any[];
  auditorias?: any[];
}
