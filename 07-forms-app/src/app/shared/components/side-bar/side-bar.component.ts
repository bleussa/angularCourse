import { Component } from '@angular/core';

interface MenuItem {
  title : string,
  url   : string,
}

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styles: ``
})
export class SideBarComponent {

  public reactiveMenu : MenuItem[] = [
    { title: 'Basicos', url: './reactive/basic' },
    { title: 'Dinamicos', url: './reactive/dynamic' },
    { title: 'Switches', url: './reactive/switches' },
  ];

  public authMenu : MenuItem[] = [
    { title: 'Registrarse', url: './auth/register'}
  ]

}
