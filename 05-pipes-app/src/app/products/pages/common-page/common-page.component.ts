import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrl: './common-page.component.css'
})
export class CommonPageComponent {

  public name : string = 'Alberto';
  public gender : 'male' | 'female' = 'male';
  public invitationMap = {
    'male' : 'invitarlo',
    'female' : 'invitarla',
  }

  public clients : string[] = ['Eduardo', 'Fernando', 'Marisa', 'Esteban', 'Jimena'];
  public clientsMap = {
    '=0' : 'No tenemos ningun cliente esperando.',
    '=1' : 'Tenemos 1 cliente esperando.',
    'other' : 'Tenemos # clientes esperando.'
  }

  public client = {
    'name': 'Alberto',
    'age': 21,
    'state': 'ARG'
  }

  public changeClient(){
    this.name = 'Fernanda';
    this.gender = 'female';
  }

  public deleteClient(){
    this.clients.shift()
  }

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log(value))
  );

}
