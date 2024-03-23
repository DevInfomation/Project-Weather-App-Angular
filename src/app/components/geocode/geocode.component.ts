import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-geocode',
  templateUrl: './geocode.component.html',
  styleUrl: './geocode.component.css'
})
export class GeocodeComponent {

  lon!: string;
  lat!: string;


  constructor(private weatherService:WeatherService) { }

  ngOnInit() { }

  getGeocode() {
    
  }
}
