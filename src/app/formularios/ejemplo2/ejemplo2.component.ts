import { Component } from '@angular/core';
import { FormGroup,FormBuilder ,ReactiveFormsModule } from '@angular/forms';

interface numeros{
  num1:number;
  num2:number;
  resultado:number;
}

@Component({
  selector: 'app-ejemplo2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ejemplo2.component.html',
  styles: ``
})
export default class Ejemplo2Component {
  formSuma!: FormGroup;

  suma:numeros = {
    num1:0,
    num2:0,
    resultado:0
  }

  constructor(private readonly fb:FormBuilder) {
  }

  ngOnInit(): void {
    //inicializa el formulario usando initForm
      this.formSuma= this.sumarNum();

  }

  sumarNum():FormGroup{
    return this.fb.group({
      num1:[''],
      num2:['']
    })
  }


  mostrarSuma():number{
    const {num1, num2}=this.formSuma.value;
    this.suma.num1=num1;
    this.suma.num2=num2;
    this.suma.resultado=num1+num2;
    return this.suma.resultado;
  }

}
