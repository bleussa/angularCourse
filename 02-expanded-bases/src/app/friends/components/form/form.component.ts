import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-friends-add-character',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public character: Character = {
    name: '',
    lastName: '',
    age: 0
  }

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public saveCharacter():void{
    if (this.character.name !== '') {
      this.onNewCharacter.emit(this.character);
    }
    this.character = {name: '',lastName: '',age: 0}
  }

}
