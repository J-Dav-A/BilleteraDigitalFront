import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  correo: string = '';
  password: string = '';

  login() {

    const data = {
      correo: this.correo,
      password: this.password
    };

    console.log(data);

    // Aquí luego llamarás al backend
    // this.authService.login(data)

    alert('Login enviado');
  }
}
