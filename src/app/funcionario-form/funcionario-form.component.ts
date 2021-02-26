import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent  {

  ultimoId=0;
  nome="Thiago";
  adicionado=false;
  @Output() funcionarioAdicionado = new EventEmitter(); //@Output() expor eventos de um compoente

  adicionar(){
    this.adicionado=true;
    
    const funcionario={
      id: ++this.ultimoId,
      nome: this.nome
    };
    this.funcionarioAdicionado.emit(funcionario);
  }


}
