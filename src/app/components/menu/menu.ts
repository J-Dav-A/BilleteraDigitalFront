import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class MenuComponent {

  menuAbierto: boolean = false;

  constructor(public router: Router) {}

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

}
