import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Usuarios/classes/usuario';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  users: Usuario[] = [

  ];
 
  showForm = false;
  usuario: Usuario = {
    id: "",
    username: "",
    password: "",
    role: ""
  }
  opResult = {
    success: false,
    error: false
  }
  msg = {
    msgInsertarSucces: "El usuario se inserto correctamente",
    msgActualizarSucces: "El usuario se actualizo correctamente"
  }

  opResultMsg = "";
  constructor(private _userService: UserService) { }


  ngOnInit(): void {
    this._userService.getUsers().subscribe((response: any) => {
      this.users = response;
    })
  }


  fnShowForm() {
    this.showForm = !this.showForm;
  }

  submit(event: any) {
    event.preventDefault();
    if (this.usuario.id === "") {
      this._userService.insertarUsuario(this.usuario).subscribe((response: any) => {
        console.log(response)
        this.users.push(response);
        this.opResult.success = true
        this.showForm = false;
        this.opResultMsg = this.msg.msgInsertarSucces;
      })
    }
    else {
      this._userService.actualizarUsuario(this.usuario).subscribe((response: any) => {
        console.log(response)
        this.users.map((item: Usuario) => {
          if (item.id === this.usuario.id) {
            item.username = this.usuario.username;
            item.password = this.usuario.password;
            item.role = this.usuario.role;
          }
          return item;
        })
        this.opResult.success = true
        this.showForm = false;
        this.opResultMsg = this.msg.msgActualizarSucces;
        // setTimeout(this.hide,2000);
      })
    }

  }

  onChange(event: any) {
    console.log(event)
    this.usuario.role = event.target.id === "admin" ? "Admin" : "Usuario"
  }

  update(usuario: any) {
    this.showForm = true;
    this.usuario.username = usuario.username;
    this.usuario.password = usuario.password;
    this.usuario.role = usuario.role;
    this.usuario.id = usuario.id
  }

  hide() {
    this.opResult.success = true
  }

  eliminar(id:any) {
    this._userService.eliminarUsuario(id).subscribe((response: any) => {
      console.log(response)
      const newItems = this.users.filter((item: any) => {
        return item.id !== id
      }); this.users = newItems;
    })
  }

  

  /* addOrEdit() {
     if (this.selectedProfesional.id === ) {
       this.selectedProfesional.id = this.users.length + 1;
       this.users.push(this.selectedProfesional);
     }
     this.selectedProfesional = new Usuario();
   }*/






}
