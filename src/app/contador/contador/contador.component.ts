import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>

        <button (click)="sumar(2)">+1</button>

        <span>{{ numero }}</span>

        <button (click)="restar()">-1</button>
    `
})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero:number = 10;
  
    sumar(valor:number){
      this.numero += valor;
    }
    restar(){
      this.numero -= 1;
    }


}