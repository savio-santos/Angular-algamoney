import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  //styleUrls: ['./funcionario-card.component.css']
styles:[`
  .card{
    text-transform: uppercase;
    color: blue;
  }`]
})
export class FuncionarioCardComponent {

@Input('obj') funcionario:any; //exportando propriedade

getStylosCartao(){
  return {
    borderWidth: `${this.funcionario.id}px` ,
    backgroundColor:this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen'
  };
}

}
