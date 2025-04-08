import { Component } from '@angular/core';
import { MenuTopHomeComponent } from "../../shared/menu-top-home/menu-top-home.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTopHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
