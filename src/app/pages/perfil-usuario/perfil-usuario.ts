import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './perfil-usuario.html',
  styleUrl: './perfil-usuario.css',
})
export class PerfilUsuario {
  nombre!: string;
  cedula!: string;
  telefono!: string;
  correo!: string;
  password!: string;

  actualizar(){

  }
}
