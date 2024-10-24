import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

interface Usuario{
  matricula:number;
  nombre:string;
  apellido:string;
  edad:number;
  email:string;
}

@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ejemplo1.component.html',
  styles: ``
})
export default class Ejemplo1Component implements OnInit {

  //crea un objeto a partir de de FormGroup,el cual es un objeto de angular para crear formularios
  formGroup!: FormGroup;

  nombre2:string='Alex';
  persona:Usuario = {
    matricula:0,
    nombre:'',
    apellido:'',
    edad:0,
    email:''
  }
  constructor(private readonly fb:FormBuilder) {
  }
  //ngOnInit() funciona como el constructor, se encarga de inicializar el componente, invocandolo al iniciar el componente
  ngOnInit(): void {
    //inicializa el formulario usando initForm
      this.formGroup = this.initForm();

      

  }
  /**
   * Inicializa el formulario con los campos: matricula, nombre, apellido y email.
   * @returns El formulario con los campos mencionados.
   */
  //dentro de initForm() se crean los campos del formulario
  initForm():FormGroup{
    //fb es un objeto creado a partir de FormBuilder
    return this.fb.group({
      matricula:[''],
      nombre:[''],
      apellido:[''],
      edad:[''],
      email:['']
    })

  }
  onSubmit(){
    //desestructuracion del objeto formGroup para obtener sus valores
    const {matricula, nombre, apellido, edad, email} = this.formGroup.value;
    //enviamos sus valores del objeto hacia el objeto persona creado a partir de la interface usuarios
    this.persona.matricula=matricula;
    this.persona.nombre=nombre; 
    this.persona.apellido=apellido;
    this.persona.edad=edad;
    this.persona.email=email;

    let datosJSON=JSON.stringify(this.persona);

    localStorage.setItem('persona',datosJSON);

  }
}
