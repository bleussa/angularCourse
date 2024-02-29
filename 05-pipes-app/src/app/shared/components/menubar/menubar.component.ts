import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menubar',
  templateUrl: './menubar.component.html',
})
export class MenubarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Pipes en Angular', icon: 'pi pi-desktop', items: [
        {
          label: 'Textos y Fechas', icon: 'pi pi-align-left', routerLink: '/'
        },
        {
          label: 'Numeros', icon: 'pi pi-dollar', routerLink: 'numbers'
        },
        {
          label: 'No comunes', icon: 'pi pi-globe', routerLink: 'common'
        }
      ]},
      {label: 'Pipes Personalizados', icon: 'pi pi-cog', items: [
        {
          label: 'Custom Pipes', icon: 'pi pi-cog', routerLink: 'custom'
        }
      ]},
    ];
  }

}
