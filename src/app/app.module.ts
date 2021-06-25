import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { TerapiasComponent } from './terapias/terapias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { UserInformationComponent } from './inicio/user-information/user-information.component';
import { CursosComponent } from './cursos/cursos.component';
import { ListaCursosComponent } from './cursos/lista-cursos/lista-cursos.component';
import { CursoComponent } from './cursos/lista-cursos/curso/curso.component';
import { ProfesionalesComponent } from './Admin/abm/profesionales/profesionales.component';
import { UsuariosComponent } from './Usuarios/usuarios.component';
import { FacturacionComponent } from './facturacion/facturacion.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TerapiasComponent,
    ContactoComponent,
    LoginComponent,
    UserInformationComponent,
    CursosComponent,
    ListaCursosComponent,
    CursoComponent,
    UsuariosComponent,
    ProfesionalesComponent,
    FacturacionComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


