import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

  apiKeyForGeocode = '973184556039930816444x39006';

  constructor(private http:HttpClient) { }

  getGeocode(lon: string, lat: string) {
    return this.http.get(`https://geocode.xyz/${lon},${lat}?geoit=xml&auth=${this.apiKeyForGeocode}`)
  }
}
