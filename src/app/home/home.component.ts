import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Categorias, categoriasD } from '../interfaces/categorias';
import { Noticias,noticias, setid, getid } from '../interfaces/noticias';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit{
  categorias=categoriasD;
  destacados:Array<Noticias>= new Array();
  extras:Array<Noticias>= new Array();
  noticia=0;
  
  constructor(router:Router) {
    for (let index = 0; index < noticias.length ; index++) {
      if(noticias[index].id == 1 || noticias[index].id == 2 || noticias[index].id == 3){
        this.destacados.push(Object.assign({}, noticias[index]))
      }
      else if(noticias[index].id == 4 || noticias[index].id == 5 || noticias[index].id == 6 || noticias[index].id == 7   ){
        this.extras.push(Object.assign({}, noticias[index]))
      }
    }
  }

  ngOnInit(): void {
  }
  jump(id:number):void{
    setid(id);    
  }


}
