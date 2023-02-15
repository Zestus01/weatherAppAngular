import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent {
  @Input() weatherInfo: any | {};
  fahrenOrCelsius: boolean;
  currentTempScale: string | undefined;
  tempConverted: boolean;
  windDirectionStr: string;

  constructor(){
    this.fahrenOrCelsius = true;
    this.tempConverted = false;
    this.currentTempScale = "Fahrenheit";
    this.windDirectionStr = '';
  }

  ngOnInit(){
    this.convertTempF();
    this.windDirection();
  }

   convertTempF(): void{
    if(!this.tempConverted){
      this.weatherInfo.main.temp_max = Math.round((this.weatherInfo.main.temp_max - 273.15) * (9/5) + 32);
      this.weatherInfo.main.temp_min = Math.round((this.weatherInfo.main.temp_min - 273.15) * (9/5) + 32);
      this.weatherInfo.main.temp = Math.round((this.weatherInfo.main.temp - 273.15) * (9/5) + 32);
      this.tempConverted = true;
    } else {
      this.weatherInfo.main.temp_max = Math.round((this.weatherInfo.main.temp_max * (9/5)) + 32);
      this.weatherInfo.main.temp_min = Math.round((this.weatherInfo.main.temp_min * (9/5)) + 32);
      this.weatherInfo.main.temp = Math.round((this.weatherInfo.main.temp * (9/5)) + 32);
    }
  }
  
  convertTempC(): void{
    this.weatherInfo.main.temp_max = Math.round((this.weatherInfo.main.temp_max - 32) * (5/9));
    this.weatherInfo.main.temp_min = Math.round((this.weatherInfo.main.temp_min - 32) * (5/9));
    this.weatherInfo.main.temp = Math.round((this.weatherInfo.main.temp - 32) * (5/9));
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
  }

   windDirection(): void{
    if(this.weatherInfo.wind.deg < 30 || this.weatherInfo.wind.deg > 330){
      this.windDirectionStr = 'East';
    }else if(this.weatherInfo.wind.deg >= 30 && this.weatherInfo.wind.deg <= 60){
      this.windDirectionStr = "North East";
    }else if(this.weatherInfo.wind.deg > 60 && this.weatherInfo.wind.deg < 120){
      this.windDirectionStr = "North";
    }else if(this.weatherInfo.wind.deg >= 120 && this.weatherInfo.wind.deg < 150){
      this.windDirectionStr = "North West";
    }else if(this.weatherInfo.wind.deg >= 150 && this.weatherInfo.wind.deg < 210){
      this.windDirectionStr = "West";
    }else if(this.weatherInfo.wind.deg >= 210 && this.weatherInfo.wind.deg < 240){
      this.windDirectionStr = "South West";
    }else if(this.weatherInfo.wind.deg >= 240 && this.weatherInfo.wind.deg < 300){
      this.windDirectionStr = "South";
    }else if(this.weatherInfo.wind.deg >= 300 && this.weatherInfo.wind.deg < 330){
      this.windDirectionStr = "South East";
    }     
   }
}
