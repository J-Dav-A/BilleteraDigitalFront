import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BilleteraService {

  private apiUrl = 'http://localhost:8080/api/billeteras';

  constructor(private http: HttpClient) {}

  crearBilletera(data: any): Observable<any> {

    return this.http.post(this.apiUrl, data);

  }

  obtenerPorUsuario(usuarioId: number): Observable<any> {

    return this.http.get(
      `${this.apiUrl}/usuario/${usuarioId}`
    );

  }

  obtenerSaldo(id: number): Observable<any> {

    return this.http.get(
      `${this.apiUrl}/${id}/saldo`
    );

  }

  activar(id: number): Observable<any> {

    return this.http.patch(
      `${this.apiUrl}/${id}/activar`,
      {}
    );

  }

  desactivar(id: number): Observable<any> {

    return this.http.patch(
      `${this.apiUrl}/${id}/desactivar`,
      {}
    );

  }

  eliminar(id: number): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/${id}`
    );

  }

}
