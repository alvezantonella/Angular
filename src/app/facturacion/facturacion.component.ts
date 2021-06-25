import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {

  columnas = [
    '',
    'Titulo',
    'Precio',
    ''
  ]

  cambioDebe = 'cambio'
  total = 0;
  cambio = 0;
  monto = 0;
  curso: string[] = []
  coursesArray: any = [
  ]

  constructor() { }

  ngOnInit(): void {
    this.curso = Object.keys(sessionStorage);
    this.curso.forEach((el: any) => {
      const item = sessionStorage.getItem(el);

      if (item != null) {
        let obj = JSON.parse(item);
        this.coursesArray.push(obj);
        this.total += parseInt(obj.cantidad) * parseFloat(obj.cost)
        
      }

    });

  }

  change(event: any) {
    console.log(event.target.value)
  }

  plus(curso: any) {
    let temp = this.coursesArray.map((element: any) => {
      if (element.id === curso.id) {
        element.cantidad++;
        this.total += element.cost;
        return element
      }
      else {
        return element;
      }
    });
    this.coursesArray = temp;
  }

  handleCambio() {
    this.cambio = this.monto - this.total;
    this.cambioDebe = this.cambio >= 0 ? "cambio" : "debe";
  }

  less(curso: any) {
    if (curso.cantidad === 1) {
      let borrar = this.coursesArray.filter((element: any) => {
        return element.id !== curso.id
      })
      this.total -= curso.precio
      this.coursesArray = borrar;
    }
    else {
      let temp = this.coursesArray.map((element: any) => {
        if (element.id === curso.id) {
          element.cantidad--;
          this.total -= element.cost;
          return element;
        }
        else {
          return element;
        }
      });

      this.coursesArray = temp;
    }
  }

  finalizarCompra() {
    this.cambioDebe = 'cambio'
    this.total = 0;
    this.cambio = 0;
    this.monto = 0;
    this.coursesArray = [];
    this.curso.forEach((el: any) => {
      sessionStorage.removeItem(el);
    });
    this.curso = [];
  }





}