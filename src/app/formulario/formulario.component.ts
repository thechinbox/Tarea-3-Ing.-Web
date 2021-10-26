import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario:FormGroup;
  estado = true;
  
  constructor(public FormB:FormBuilder) { 
    this.formulario = this.FormB.group({
      nombre: ["", Validators.compose([Validators.required, Validators.nullValidator, Validators.pattern("^[a-zA-Z ]*$")])],
      correo: ["", Validators.compose([Validators.required, Validators.nullValidator, Validators.email])],
      telefono: ["", Validators.compose([Validators.required, Validators.pattern("[0-9]{9}")])],
      dirigido: ["", Validators.compose([Validators.required, Validators.nullValidator])],
      mensaje:["", Validators.compose([Validators.required, Validators.nullValidator])]
    })
  }
  
  ngOnInit(): void {
  }

  enviado():void{
    this.estado=false;
  }

}
