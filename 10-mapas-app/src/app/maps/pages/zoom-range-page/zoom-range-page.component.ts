import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{

  @ViewChild('map')
  public divMap? : ElementRef;

  public zoomDefault : number = 10;
  public lngLat : LngLat = new LngLat(-68.801543, -32.938578)
  public map? : Map;

  ngAfterViewInit(): void {

    if (!this.divMap) {
      return
    }

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/standard',
      center: this.lngLat,
      zoom: this.zoomDefault,
    })

    this.mapListener();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListener() {
    if (!this.map) throw 'Mapa no inicializado.'

    this.map.on('zoom', ( ev ) => {
      this.zoomDefault = this.map!.getZoom();
    })

    this.map?.on('zoomend', ( ev ) => {
      if (this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    })

    this.map.on('moveend', () => {
      this.lngLat = this.map!.getCenter();
    })

  }

  public zoomIn(){
    this.map?.zoomIn();
  }

  public zoomOut(){
    this.map?.zoomOut();
  }

  public zoomChanged( value : string ){
    this.zoomDefault = Number(value);
    this.map!.zoomTo( this.zoomDefault );
  }


}
