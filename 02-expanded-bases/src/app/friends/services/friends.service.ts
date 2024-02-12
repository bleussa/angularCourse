import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class FriendsService {

  constructor() { }

  public listCharacters: Character[] = [
    {
      id: uuid(),
      name: 'Chandler',
      lastName: 'Bing',
      age: 31
    },
    {
      id: uuid(),
      name: 'Joey',
      lastName: 'Tribianni',
      age: 30
    },
    {
      id: uuid(),
      name: 'Rachel',
      age: 30,
    }
  ];

  public onNewCharacter(character: Character): void{
    const newCharacter: Character = {
      id: uuid(),
      ...character
    }

    this.listCharacters.push(newCharacter);
  }

  public onDelete(index: number):void{
    console.log(this.listCharacters.splice(index, 1));
  }

  public onDeleteById(id: string): void{
    this.listCharacters = this.listCharacters.filter(character => character.id !== id)
    console.log({id});
  }

}
