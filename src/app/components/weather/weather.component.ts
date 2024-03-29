import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

  city!: string;
  country!: string;
  weatherData: any;

  constructor(private weatherService:WeatherService) {  }

  ngOnInit() {}

  getWeather() {
    this.weatherService.getWeather(this.city, this.country).subscribe(data=>{
      this.weatherData=data;
      console.log(data);
    })
  }
}
