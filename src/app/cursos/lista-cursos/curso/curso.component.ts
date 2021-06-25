import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Admin/abm/service.service';
import { Cursos } from 'src/app/cursos/clase/cursos';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})

/*export class CursoComponent implements OnInit {
  @Input() curso:any;
  constructor() { }
  ngOnInit(): void {
  }
}*/

export class CursoComponent implements OnInit {
  @Input() curso: Cursos = new Cursos();

  coursesArray ={
    cantidad:0,
    title:"",
    cost:0,
    imagen:"",
    id:0,
    description: ""
  }

  selectedCursos:any [] = [];

  constructor(private cursos: ServiceService, private ruta: Router) {

  }
  ngOnInit(): void {
    console.log(this.curso)

  }

  addCart(cursos: Cursos) {
    console.log(cursos)
    this.coursesArray.id = cursos.id;
    this.coursesArray.title = cursos.title;
    this.coursesArray.description = cursos.description;
    this.coursesArray.cost = cursos.cost;
    this.coursesArray.imagen = cursos.imagen;
    this.coursesArray.cantidad = 1;



    sessionStorage.setItem("cursos" + cursos.id, JSON.stringify(this.coursesArray));
    this.ruta.navigate(["/facturacion"])

  }

  qty = 0;
  plus(){
    this.qty++;
  }

  less(){
    this.qty = this.qty > 0 ? this.qty -1 : 0;
  }
}