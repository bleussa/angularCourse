import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-alone',
  standalone: true,
  imports: [],
  templateUrl: './counter-alone.component.html',
})
export class CounterAloneComponent {

  @Input()
  public numero : number = 0;

  public sum(){
    this.numero++;
  }

}
