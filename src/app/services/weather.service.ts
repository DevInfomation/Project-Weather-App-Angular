import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '390c03bf6713216ccbdf04344ede0d66';

  constructor(private http:HttpClient) {  }

    getWeather(city: string, country: string) {
      return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${this.apiKey}&units=metric`);
    }
}
