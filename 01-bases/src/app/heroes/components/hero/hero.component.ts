import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
    public nombre: string = 'Spider';
    public apellido: string = 'Man';
    public age: number = 22;

    public get nombreCapitalizado() : string {
        return this.nombre.toUpperCase();
    }


    getHeroDescription() : string {
        return `
            Este heroe es ${this.nombre} ${this.apellido}
        `
    }

    changeHero() : void{
        this.nombre = 'Iron';
    }

    changeAge() : void{
        this.age = 36;
    }


}
