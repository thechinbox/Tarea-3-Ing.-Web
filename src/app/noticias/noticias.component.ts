import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticias, noticias, getid } from '../interfaces/noticias';
import { Categorias, categoriasD } from '../interfaces/categorias';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  noticia:Noticias;
  categoria;

  constructor(router:Router) {
    if(getid() == 0){
      router.navigate([''])
    }
    this.noticia = noticias[getid()-1];    
    this.categoria = categoriasD[this.noticia.idcategoria].categoria
  }
  
  ngOnInit(): void {

  }

}

