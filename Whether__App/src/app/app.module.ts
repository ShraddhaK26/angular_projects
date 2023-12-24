import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';



@NgModule({
  declarations: [
    AppComponent,
    WeatherDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
