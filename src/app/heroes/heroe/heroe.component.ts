import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    nombre: string = 'AironMen';
    edad:number = 45;

    //getter no metodo
    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void {
        this.nombre = 'SpiderCerdo';
    }

    cambiarEdad(): void {
        console.log('Hey...');        
        this.edad = 30;
    }
}