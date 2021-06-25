  
import { Component, OnInit } from '@angular/core';
import { Profesional } from '../profesional';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent implements OnInit {
  profesionalesArray: Profesional[] = [

  ];

  selectedProfesional: Profesional = new Profesional();

  constructor(private profesionales: ServiceService){

  }
  ngOnInit(): void {
    this.profesionales.getProfesionales().subscribe((response:any)=>{
      this.profesionalesArray = response;
    })
  }

  addOrEdit() {
    if (this.selectedProfesional.id === 0) {
      this.selectedProfesional.id = this.profesionalesArray.length + 1;
      this.profesionalesArray.push(this.selectedProfesional);
    }
    this.selectedProfesional = new Profesional();
  }

  openForEdit(profesional: Profesional) {
    this.selectedProfesional = profesional;
  }

  delete() {
    if (confirm('Estas seguro que quieres eliminarlo?')) {
      this.profesionalesArray = this.profesionalesArray.filter(p => p != this.selectedProfesional);
      this.selectedProfesional = new Profesional();
    }
  }
}

