import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent {
  @Input() info: any | {};
  fahrenOrCelsius: boolean;

  constructor(){
    this.info = "";
    this.info.main = {};
    this.info.main.temp = 0;
    this.fahrenOrCelsius = true;
   }

   convertTempF(): void{
      this.info.temp.max = (this.info.main.temp_max - 273.15) * (9/5) + 32;
      this.info.temp.min = (this.info.main.temp_min - 273.15) * (9/5) + 32;
      this.info.temp.curr = (this.info.main.temp - 273.15) * (9/5) + 32;
   }

   convertTempC(): void{
    this.info.temp.max
   }

   changeTempScale(): void{
    this.fahrenOrCelsius = !this.fahrenOrCelsius;
    if(this.fahrenOrCelsius){
      this.convertTempF();
    } else{
      this.convertTempC();
    }
   }
}
