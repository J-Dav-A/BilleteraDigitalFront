import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  private apiUrl = 'http://localhost:8080/api/transacciones';

  constructor(private http: HttpClient) {}

  retirar(data: any) {
    return this.http.post(
      `${this.apiUrl}/retirar`,
      data
    );
  }

  transferir(data: any) {
    return this.http.post(
      `${this.apiUrl}/transferir`,
      data
    );
  }

}
