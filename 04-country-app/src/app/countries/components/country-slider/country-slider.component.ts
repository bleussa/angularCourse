import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Image } from '../../interfaces/Image';

@Component({
  selector: 'countries-country-slider',
  templateUrl: './country-slider.component.html',
  styleUrls: ['./country-slider.component.css']
})
export class CountrySliderComponent implements OnInit{

  constructor(
    private countriesService : CountriesService,
  ) { }

  @Input()
  public country : string = '';

  public image? : Image;

  ngOnInit(): void {
    this.countriesService.searchImage(this.country).subscribe(
      image => {
        this.image = image;
      }
    )
  }




}
