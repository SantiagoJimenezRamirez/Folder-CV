import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  constructor(){

  }
  
  ngOnInit(): void {
    
  }

  copy(username : string){
    navigator.clipboard.writeText(username).then(() => {
      console.log('Username copied to clipboard:', username);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }
}
