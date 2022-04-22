import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

    @ViewChild('txtBuscar') txtBuscar: any;

    buscar(termino: string){
        console.log(termino);
    }

    constructor() { };
}
