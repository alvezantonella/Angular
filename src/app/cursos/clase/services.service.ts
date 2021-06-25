import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cursos } from './cursos';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url = "http://localhost:3000/cursos";
  constructor(private _http: HttpClient) { }

  getCursos(){
    return this._http.get<Cursos[]>(this.url);
  }

}


