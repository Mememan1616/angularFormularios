import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder ,ReactiveFormsModule } from '@angular/forms';
import { concat } from 'rxjs';


interface resistencias{
  
  color1:number;
  color2:number;
  color3:number;
  tolerancia:number;
  resultado:number;
  max:number;
  min:number;

}
@Component({
  selector: 'app-resistencias',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './resistencias.component.html',
  styles: ""
})
export default class ResistenciasComponent {
  formResistencias!: FormGroup;
  resultados: resistencias[] = []; // Arreglo para almacenar los resultados
  cont:number=0;

  constructor(private readonly fb:FormBuilder) {
  }

  resistencia:resistencias={
    color1:0,
    color2:0,
    color3:0,
    tolerancia:0,
    resultado:0,
    max:0,
    min:0
  }
  
  ngOnInit(): void {
    this.formResistencias = this.resistencias();
    
    
  }

  resistencias():FormGroup{
    return this.fb.group({
      color1:[''],
      color2:[''],
      color3:[''],
      tolerancia:['']
    })
    
    
  }

 
  calcularResistencia(){
    const{color1,color2, color3,tolerancia}=this.formResistencias.value;
  
    this.resistencia.color1=color1;
    this.resistencia.color2=color2;
    this.resistencia.color3=Number(color3);
    let r=color1+color2
    this.resistencia.tolerancia=Number(tolerancia);
    this.resistencia.resultado=Number(r)*this.resistencia.color3;
    r=this.resistencia.resultado*this.resistencia.tolerancia;
    this.resistencia.min=this.resistencia.resultado-r;
    this.resistencia.max=this.resistencia.resultado+r;

    this.resultados[this.cont]={
      color1:this.resistencia.color1,
      color2:this.resistencia.color2,
      color3:this.resistencia.color3,
      tolerancia:this.resistencia.tolerancia,
      resultado:this.resistencia.resultado,
      max:this.resistencia.max,
      min:this.resistencia.min
    }
    console.log(this.resultados[this.cont]);
    console.log(this.resultados);
    this.cont=this.cont+1;
    
  }
}
