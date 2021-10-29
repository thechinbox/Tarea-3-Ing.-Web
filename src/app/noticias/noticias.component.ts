import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticias, noticias } from '../interfaces/noticias';
import { Categorias, categoriasD } from '../interfaces/categorias';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  noticia:Noticias;
  categoria;
  id:number = 0;

  constructor(router:ActivatedRoute) {
    router.params.subscribe(datos=>{
      this.id = datos["id"]; 
    })
    this.noticia = noticias[this.id-1];    
    this.categoria = categoriasD[this.noticia.idcategoria]
    
  }
  
  ngOnInit(): void {
    
  }

}

