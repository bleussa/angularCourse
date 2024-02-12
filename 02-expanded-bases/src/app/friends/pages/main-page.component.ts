import { Component } from '@angular/core';
import { FriendsService } from '../services/friends.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-friends-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor (private friendsService: FriendsService) {};

  get characters(): Character[] {
    return [...this.friendsService.listCharacters];
  }

  onNewCharacter(character : Character) : void{
    return this.friendsService.onNewCharacter(character);
  }

  onDelete(index: number) : void{
    return this.friendsService.onDelete(index);
  }

  onDeleteById(id: string) : void{
    return this.friendsService.onDeleteById(id);
  }

}
