import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { GeocodeComponent } from './components/geocode/geocode.component';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    GeocodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
