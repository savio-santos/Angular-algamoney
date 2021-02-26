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

}
