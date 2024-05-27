import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css',
})
export class MiniMapComponent implements AfterViewInit{

  @ViewChild('map')
  public divMap? : ElementRef;
  public zoomDefault : number = 15;
  public map? : Map;

  @Input()
  public lngLat?: [number, number];

  ngAfterViewInit(): void {
    if (!this.lngLat) return;
    if (!this.divMap) return;

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/standard',
      center: this.lngLat,
      zoom: this.zoomDefault,
      interactive: false,
    });

    const marker = new Marker({
      color: 'red',
    })
      .setLngLat(this.lngLat)
      .addTo(this.map)

  }

}
