import { CssSelector } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ultimoId=0;
  nome = 'Sávio';
  adicionado= false;
  funcionarios = [];

  adicionar() {
    console.log(`Adicionado ${this.nome}`);
    this.adicionado = true;
    
    this.funcionarios.push(
      {
        id:++this.ultimoId,
        nome:this.nome
      }
      );

  }
 

}
