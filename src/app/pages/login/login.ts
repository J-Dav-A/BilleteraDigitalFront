import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/autenticacion';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: '/login.css'
})
export class LoginComponent {
  correo: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  login() {
    const data = {
      correo: this.correo,
      password: this.password,
    };

    this.authService.login(data).subscribe({
      next: (res: any) => {
        this.authService.guardarToken(res.token);

        console.log(res);

        this.router.navigate(['/dashboard']);
      },

      error: (err) => {
        console.error(err);
      },
    });
  }
}
