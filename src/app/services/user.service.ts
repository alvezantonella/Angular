import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../Usuarios/classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:3000/users";
  constructor(private _http: HttpClient) { }

  getUsers(){
    return this._http.get<Usuario>(this.url);
  }

  insertarUsuario(usuario:any){
    return this._http.post(this.url,usuario);
  }
  actualizarUsuario(usuario:any){
    return this._http.put(this.url+"/"+usuario.id,usuario);
  }

  eliminarUsuario(id:any) {
    return this._http.delete(this.url+"/"+id);
  }
}
