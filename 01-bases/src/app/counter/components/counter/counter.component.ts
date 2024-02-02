import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `

        <h3>{{counter}}</h3>
        <button (click)="modContador('+')">+1</button>
        <button (click)="resetContador()">Reset</button>
        <button (click)="modContador('-')">-1</button>

    `
})
export class CounterComponent {
    public counter:number = 0;

    public modContador(op: string):void{
        if (op == '+') {
            this.counter += 1;
        } else if (op == '-') {
            this.counter -=1
        }
    }

    public resetContador():void{
        this.counter = 0
    }
}
