import { Component,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-temh',
  standalone: true,
  imports: [],
  templateUrl: './temh.component.html',
  styles: ``
})
export class TemhComponent {
  @Input() mensaje!:string
  @Output() mensaje2=new EventEmitter<string>()

  enviarMensaje(){
    
    this.mensaje2.emit('Hola desde el componente hijo')
    console.log(this.mensaje2.emit('hello'));
  }
}
