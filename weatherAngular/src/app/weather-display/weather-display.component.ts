import { Component, Input, OnInit } from '@angular/core';
import { WeatherInfo } from 'src/weatherInfo';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent {
  @Input() weatherInfo: any | {};
  fahrenOrCelsius: boolean;
  currentTempScale: string | undefined;
  info: WeatherInfo = {
    temp : {
      max: 0,
      min: 0,
      curr: 0,
    },
    main: {},
    wind: {},
    name: '',
  }



  constructor(){
    this.fahrenOrCelsius = true;
    this.currentTempScale = "Fahrenheit";
    this.info.temp.max = this.weatherInfo.main.temp_max;
    this.info.temp.min = this.weatherInfo.main.temp_min;
    this.info.temp.curr = this.weatherInfo.main.temp;
   }


   convertTempF(): void{
    // this.info.temp.max = 0;
    // this.info.temp.min = 0;
    // this.info.temp.curr = 0;
    this.info.temp.max = (this.info.main.temp_max - 273.15) * (9/5) + 32;
    this.info.temp.min = (this.info.main.temp_min - 273.15) * (9/5) + 32;
    this.info.temp.curr = (this.info.main.temp - 273.15) * (9/5) + 32;
   }

   convertTempC(): void{
    // console.log(this.info);
    // console.log(this.info.temp);
    // this.info.temp.max = 0;
    // this.info.temp.min = 0;
    // this.info.temp.curr = 0;
    this.info.temp.max = (this.info.main.temp_max - 273.15);
    this.info.temp.min = (this.info.main.temp_min - 273.15);
    this.info.temp.curr = (this.info.main.temp - 273.15);
   }

   changeTempScale(): void{
    this.fahrenOrCelsius = !this.fahrenOrCelsius;
    if(this.fahrenOrCelsius){
      this.convertTempF();
      this.currentTempScale = "Fahrenheit";
    } else{
      this.convertTempC();
      this.currentTempScale = "Celsius"
    }
    console.log(this.currentTempScale);
   }
}
