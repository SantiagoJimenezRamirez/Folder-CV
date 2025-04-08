import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-top-home',
  standalone: false,
  templateUrl: './menu-top-home.component.html',
  styleUrl: './menu-top-home.component.scss'
})
export class MenuTopHomeComponent {
  sections = ['Inicio', 'Resevación','Consultas', 'Eventos', 'Noticias','Reclamos']

}
