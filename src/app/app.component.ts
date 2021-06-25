import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(private route: Router,private _userService: UserService, public _loginService:LoginService){

  }

  ngOnInit(): void {
    this._userService.getUsers().subscribe((response:any)=>{
      console.log(response);
    })
  }

  logout(){
    this._loginService.logout();
    this.route.navigate(['/'])
  }

  menu = [
    {
      nombre:"Inicio",
      enlace:"inicio",
      class:"nav-link active"
    },{
      nombre:"Gestionar profesionales",
      enlace:"profesionales",
      class:"nav-link"
    },
    {
      nombre:"Gestionar usuarios",
      enlace:"usuarios",
      class:"nav-link"
    },
    
    {
      nombre:"Terapias",
      enlace:"terapias",
      class:"nav-link"
    },
    {
      nombre:"Cursos",
      enlace:"cursos",
      class:"nav-link"
    },
    {
      nombre:"Facturacion",
      enlace:"facturacion",
      class:"nav-link"
    },
    {
      nombre:"Contactanos",
      enlace:"contacto",
      class:"nav-link"
    },
   
  ]
}