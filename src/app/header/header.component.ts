import { Component, OnInit } from '@angular/core';
import { setid } from '../interfaces/noticias';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;

  constructor(){ 

  }

  ngOnInit(): void {
    
  }
  

}
