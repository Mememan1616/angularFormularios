import { Component } from '@angular/core';
import { TemhComponent } from '../temh/temh.component';

@Component({
  selector: 'app-temp',
  standalone: true,
  imports: [TemhComponent],
  templateUrl: './temp.component.html',
  styles: ``
})
export default class TempComponent {
  title:string='Saludo desde componente padre';


  //recibe el evento del hijo
  datosloc:string='';
  mensaje2:string='';
  recibirMensaje(mensaje:string){
    this.mensaje2=mensaje
    console.log(this.mensaje2)
  }

  readlocalstorage(){
    //recibe datos del local storage
    //this.datosloc=localStorage.getItem('persona')!;
    //convertir de JSON a objeto
    const dataobj=JSON.parse(localStorage.getItem('persona')!)
    this.datosloc=dataobj;
    console.log(this.datosloc)
  }
}
