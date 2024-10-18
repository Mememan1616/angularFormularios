import { Component } from '@angular/core';
import { FormGroup, FormBuilder ,ReactiveFormsModule } from '@angular/forms';
import { concat } from 'rxjs';


interface resistencias {
  color1:number;
  color2:number;
  color3:number;
  tolerancia:number;
  resultado:number;
}
@Component({
  selector: 'app-resistencias',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './resistencias.component.html',
  styles: ``
})
export class ResistenciasComponent {
  formResistencias!: FormGroup;

  constructor(private readonly fb:FormBuilder) {
  }

  resistencia:resistencias={
    color1:0,
    color2:0,
    color3:0,
    tolerancia:0,
    resultado:0
  }
  ngOnInit(): void {
    this.formResistencias = this.Resistencia();
    
    
  }

  Resistencia():FormGroup{
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
    let Rt1:number=this.resistencia.resultado-r;
    let Rt2:number=this.resistencia.resultado+r;
    
  }
}
