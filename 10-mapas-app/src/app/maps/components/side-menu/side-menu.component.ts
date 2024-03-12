import { Component } from '@angular/core';

interface MenuItem{
  route : string,
  name : string,
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styles: `
    li{
      cursor: pointer;
      transition: all .2s;
    }
  `
})
export class SideMenuComponent {

  public menuItems : MenuItem[] = [
    { route: '/maps/fullscreen', name: 'Full Screen'},
    { route: '/maps/zoom-range', name: 'Zoom GUI'},
    { route: '/maps/markers', name: 'Markers'},
    { route: '/maps/properties', name: 'Properties'},
  ];

  constructor(

  ){}

}
