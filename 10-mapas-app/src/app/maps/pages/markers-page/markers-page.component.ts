import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';
import { CounterAloneComponent } from '../../../alone/components/counter-alone/counter-alone.component';

interface MarkerAndColor{
  marker: Marker;
  color: string;
}

interface PlainMarker{
  lngLat: number[];
  color: string;
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css'],
})
export class MarkersPageComponent implements AfterViewInit{

  @ViewChild('map')
  public divMap? : ElementRef;

  public zoomDefault : number = 13;
  public lngLat : LngLat = new LngLat(-68.801543, -32.938578)
  public map? : Map;
  public markers : MarkerAndColor[] = [];

  ngAfterViewInit(): void {

    if (!this.divMap) {
      return
    }

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/standard',
      center: this.lngLat,
      zoom: this.zoomDefault,
    });

    this.readFromLocalStorage();
  }


  public createMarker(){

    if (!this.map) return

    const generatedColor = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter()

    this.addMarker(lngLat, generatedColor);
  }

  public addMarker( lngLat : LngLat, color : string = 'red' ){
    if (!this.map) return

    const marker = new Marker({
      color: color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map)

    marker.on('dragend', () => {
      this.saveToLocalStorage();
    })

    this.markers.push({
      marker: marker,
      color: color,
    });

    this.saveToLocalStorage();

  }

  public deleteMarker(index: number){
    this.markers[index].marker.remove()
    this.markers.splice(index, 1)
  }

  public flyToMarker( marker: Marker){
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    })
  }

  public saveToLocalStorage(){
    const plainMarkers : PlainMarker[] = this.markers.map( ({color, marker}) => {
      return {
        color: color,
        lngLat: marker.getLngLat().toArray()
      }
    });

    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }

  public readFromLocalStorage(){
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers : PlainMarker[] = JSON.parse(plainMarkersString);

    plainMarkers.forEach( ( {lngLat, color} ) => {
      const [ lng, lat ] = lngLat;
      const coords = new LngLat(lng, lat);

      this.addMarker(coords, color)
    } )



  }


}
