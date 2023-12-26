import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from '../service/provider.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent {
  city_Name:any=''
  searchBox:boolean=false
  details:boolean=false
  weatherDetails:any;
  cityName: any;
  CountryName: any;
  Temp: any;
  TempMin: any;
  TempMax: any;
  Pressure: any;
  humidity: any;
  speed: any;
  constructor(private dataService:ProviderService){}



  showDetails(): void{
 this.dataService.city=this.city_Name 

 this.dataService.getDetails().subscribe(res=>{
  this.weatherDetails=res
console.log("Data",res);
  this.cityName = this.weatherDetails.name;
  this.CountryName = this.weatherDetails.sys.country
  this.Temp = this.weatherDetails.main.temp
  this.TempMax = this.weatherDetails.main.temp_max
  this.TempMin = this.weatherDetails.main.temp_min
  this.Pressure = this.weatherDetails.main.pressure
  this.humidity = this.weatherDetails.main.humidity
  this.speed = this.weatherDetails.wind.speed
  this.details=!this.details
  console.log( this.speed);

  })
}
  showWeather(){
    this.searchBox=!this.searchBox
    this.details=false
  }

}

