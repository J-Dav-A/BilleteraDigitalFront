import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { BilleteraService } from '../../core/services/billetera';

@Component({
  selector: 'app-billetera',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './billetera.html',
  styleUrl: './billetera.css',
})
export class BilleteraComponent {
  nombre: string = '';

  tipoBilletera: string = '';

  limite!: number;

  constructor(private billeteraService: BilleteraService) {}

  crearBilletera() {
    const data = {
      nombre: this.nombre,

      tipoBilletera: this.tipoBilletera,

      limite: this.limite,
    };

    this.billeteraService.crearBilletera(data).subscribe({
      next: (res) => {
        console.log('Billetera creada', res);

        alert('Billetera creada correctamente');

        // limpiar formulario
        this.nombre = '';
        this.tipoBilletera = '';
        this.limite = 0;
      },

      error: (err) => {
        console.error(err);

        alert('Error al crear billetera');
      },
    });
  }
}
