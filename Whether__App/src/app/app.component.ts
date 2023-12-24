import { Block } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Whether__App';
constructor( private router :Router){

}
  openDialog(){
const modelDiv =document.getElementById('myModal');
if(modelDiv!=null){
  modelDiv.style.display='block';
   window.location.href = "https://waetherDetails";
 
}
  }
  closeDialog(){
    const modelDiv =document.getElementById('myModal');
    if(modelDiv!=null){
      modelDiv.style.display='none';
    }
      }
}
