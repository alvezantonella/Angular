import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cursos } from 'src/app/cursos/clase/cursos';
import { Profesional } from './profesional';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  getCursos() {
    return this._http.get<Cursos>(this.url);
  }
  

  url = "http://localhost:3000/profesionales";
  constructor(private _http: HttpClient) { }

  getProfesionales(){
    return this._http.get<Profesional>(this.url);
  }
}
