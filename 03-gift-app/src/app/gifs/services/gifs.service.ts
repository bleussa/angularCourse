import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  // Constructor
  constructor(
    private http : HttpClient
  ) {
    this.getLocalStorage();
  }


  // Propiedades
  private apiKey : string = "GB4iCTHYaHlcBBQjMPkYYh6RXQG6ypYf";
  private apiUrl : string = "https://api.giphy.com/v1/gifs";
  private tagsHistory : string[] = [];
  private gifsList: Gif[] = [];


  // Getters
  public get getTagsHistory() : string[]{
    return [...this.tagsHistory];
  }
  public get getGifsList() : Gif[]{
    return this.gifsList;
  }


  // Metodo para organizar el historial
  private organizeHistory(tag : string){
    tag = tag.toLowerCase();

    if (this.tagsHistory.includes(tag)) {
      this.tagsHistory = this.tagsHistory.filter( (oldTag) => oldTag != tag );
    }
    this.tagsHistory.unshift(tag);
    this.tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }


  // Metodo para traer el almacenamiento local
  private getLocalStorage() : void{

    const localStorageData = localStorage.getItem('history');

    if (!localStorageData) return;

    this.tagsHistory = JSON.parse(localStorageData);

    this.searchTag(this.tagsHistory[0]);
  }


  // Metodo para guardar en el almacenamiento local
  private saveLocalStorage() : void {
    localStorage.setItem('history', JSON.stringify(this.tagsHistory))
  }


  // Metodo para realizar la busqueda y para actualizar el componente gifsList
  public searchTag( tag : string ) : void{
    if (tag.length === 0) return ;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', 10)
    .set('q', tag)

    this.http.get<SearchResponse>(`${this.apiUrl}/search`, { params })
    .subscribe( response => {
      this.gifsList = response.data;
    });
  }

}
