import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.css']
})
export class ZipComponent {
  weatherInfo: {} | undefined;
  zip: string = '';
  message: string | undefined;
  private APIKEY = '0df3bd48560ad03c51a4637c5db0548e';
  private APIURL = 'https://api.openweathermap.org/data/2.5/weather?zip={ZIP},us&appid={KEY}';

  constructor(
    private weatherService: WeatherService,
  ) { }


  checkZip(): void{
    let zipCode = parseInt(this.zip);
    if(zipCode  < 10000 && this.zip[0] === '0' && this.zip.length === 5 && zipCode > 999){
      this.handleData(this.zip);
    } else if(zipCode > 9999 && zipCode <= 99999) {
      this.handleData(this.zip);
    } else {
      this.handleError('ZIP needs to be a number')
    }
  }

  handleData(zip: string): void{
    this.weatherService.getData(zip)
      .subscribe( (response) => {
        this.weatherInfo = response.main
      }
    );
  }

  handleError(message: string): void{
    console.log(message);
  }
}
