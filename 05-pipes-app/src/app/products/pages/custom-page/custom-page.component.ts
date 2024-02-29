import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
})
export class CustomPageComponent {

  itemsSplitButton: MenuItem[] = [];
  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Venom',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Deadpool',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Iron Man',
      canFly: true,
      color: Color.red
    }
  ]

  public isUpperCase : boolean = false;

  public orderBy : keyof Hero | null = null;

  public toggleUpperCase() : void {
    this.isUpperCase = !this.isUpperCase;
  }

  public changeOrder(term : keyof Hero) : void {
    this.orderBy = term;
  }

  ngOnInit() {
        this.itemsSplitButton = [
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ];
    }

}
