import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

interface compra {
  personas: number,
  boletos: number,
  tarjeta: number,
  precioN: number,
  descuento: number,
  total: number,
  mensaje: string,
  autorizada:number
}

@Component({
  selector: 'app-cine',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export default class CineComponent {
  formCine !: FormGroup;

  compra: compra = {
    personas: 0,
    boletos: 0,
    tarjeta: 0,
    precioN: 0,
    descuento: 0,
    total: 0,
    mensaje: "",
    autorizada:0
  }

  constructor(private readonly fb: FormBuilder) {
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formCine = this.datosCompra();
  }

  datosCompra(): FormGroup {
    return this.fb.group({
      personas: [''],
      boletos: [''],
      tarjeta: [''],
    })
  }

  comprarBoletos(): string {
    const { personas, boletos, tarjeta } = this.formCine.value;
    this.compra.personas = Number(personas);
    this.compra.boletos = Number(boletos);
    this.compra.tarjeta = Number(tarjeta);
    this.compra.mensaje="";
    this.compra.descuento=0;
    this.compra.total=0;
    this.compra.autorizada=0;
    let message: string = "";
    const precio: number = 12;
    let maxboletos = this.compra.personas * 7;

    if (this.compra.boletos > maxboletos) {
      message = "No puedes comprar " + this.compra.boletos+ " boletos para solo para "+ this.compra.personas + " personas";
      this.compra.autorizada=0;
    }
    else {
      this.compra.autorizada=1;
      this.compra.precioN = this.compra.boletos * precio;

      if (this.compra.boletos > 5) {
        this.compra.descuento = this.compra.precioN * 0.15;

      }else if (this.compra.boletos >= 3 && this.compra.boletos<=5) {

        this.compra.descuento = this.compra.precioN * 0.10;

      } else if (this.compra.boletos<=2) {
        this.compra.descuento = 0
      }

      this.compra.total = this.compra.precioN - this.compra.descuento;
  
      if(this.compra.tarjeta == 1) {
        this.compra.descuento = this.compra.total * 0.10;
        console.log(tarjeta);
        this.compra.total = this.compra.total - this.compra.descuento;
      }

      message = "El total es " + this.compra.total;
      
     
    }
    this.compra.mensaje = message
    console.log(this.compra.autorizada);
    return message;
  }


}
