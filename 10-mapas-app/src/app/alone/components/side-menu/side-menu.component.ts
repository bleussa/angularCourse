import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem{
  route : string,
  name : string,
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports:[CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styles: `
    ul{
      position: fixed;
      top: 20px;
      left: 20px;
      z-index: 10;
      width: 200px;
    }
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
    { route: '/alone', name: 'Alone'}
  ];

  constructor(

  ){}

}
