import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../components/menu/menu';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {

}
