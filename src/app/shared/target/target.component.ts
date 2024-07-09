import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-target',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './target.component.html',
  styleUrl: './target.component.scss'
})
export class TargetComponent {
  showTarget = true
}
