import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransaccionService } from '../../core/services/transaccion';

@Component({
  selector: 'app-retiro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './retiro.html',
})
export class RetiroComponent {
  billeteraOrigenId!: number;
  monto!: number;


  constructor(private transaccionService: TransaccionService) {}

  retirar() {
    const data = {
      billeteraId: this.billeteraOrigenId,
      valor: this.monto
    };

    this.transaccionService.retirar(data).subscribe({
      next: (res) => {
        console.log('Retiro exitoso', res);
        alert('Retiro realizado');
      },
      error: (err) => {
        console.error(err);
        alert('Error al retirar');
      },
    });
  }
}
