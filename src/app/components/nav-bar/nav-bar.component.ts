import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{

  activeContainer: string | null = null;

  constructor(){

  }

  ngOnInit(): void {
    
  }

  handleClick(container: string) {
    this.activeContainer = this.activeContainer === container ? null : container;
  }
}
