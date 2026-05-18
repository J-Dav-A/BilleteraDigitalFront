import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaccion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './transaccion.html',
  styleUrl: './transaccion.css',
})
export class TransaccionesComponent {
  tipoTransaccion: string = '';

  billeteraOrigenId!: number;
  billeteraDestinoId!: number;

  monto!: number;

  retirar() {
    console.log('Retiro');
  }

  transferir() {
    console.log('Transferencia');
  }

  recargar() {
    console.log('Recarga');
  }
}
