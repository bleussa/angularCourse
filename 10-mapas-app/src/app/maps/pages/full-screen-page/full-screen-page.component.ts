import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css'],
})
export class FullScreenPageComponent implements AfterViewInit{

  @ViewChild('map')
  public divMap? : ElementRef;

  ngAfterViewInit(): void {

    if (!this.divMap) {
      return
    }

    const map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-68.801543, -32.938578],
      zoom: 20,
    })
  }

}
