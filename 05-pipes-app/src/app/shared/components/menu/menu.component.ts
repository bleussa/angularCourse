import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit{

  public items : MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Pipes en Angular', icon: 'pi pi-desktop', items: [
        {
          label: 'Textos y Fechas', icon: 'pi pi-align-left'
        },
        {
          label: 'Numeros', icon: 'pi pi-dollar'
        },
        {
          label: 'No comunes', icon: 'pi pi-globe'
        }
    ]},
      {label: 'Pipes Personalizados', icon: 'pi pi-cog', items: [
        {
          label: 'Otros elementos', icon: 'pi pi-cog'
        }
      ]}
    ];
  }


}
