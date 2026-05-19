import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../core/services/usuario';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuario.html',
  styleUrls: ['./usuario.css'],
})
export class UsuarioComponent {
  nombre: string = '';
  cedula: string = '';
  telefono: string = '';
  correo: string = '';
  password: string = '';

  constructor(private usuarioService: Usuario) {}

  registrar() {
    const data = {
      nombre: this.nombre,
      cedula: this.cedula,
      telefono: this.telefono,
      correo: this.correo,
      password: this.password,
    };

    //this.usuarioService.registrar(data).subscribe({
    //  next: (res) => {
      //  console.log('Usuario registrado', res);
        //alert('Registro exitoso');
      //},

      //error: (err) => {
       // console.error(err);
        //alert('Error al registrar usuario');
      //},
    //});
  }
}
