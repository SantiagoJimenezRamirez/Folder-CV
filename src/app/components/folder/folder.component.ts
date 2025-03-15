import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-folder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.scss'
})
export class FolderComponent {

  activeContainer: string | null = null;


  handleClick(container: string) {
    this.activeContainer = this.activeContainer === container ? null : container;
  }
}
