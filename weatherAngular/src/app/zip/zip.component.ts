import { Component } from '@angular/core';
import { of } from 'rxjs';
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
  error: string | undefined;
  private APIKEY = '0df3bd48560ad03c51a4637c5db0548e';
  private APIURL = 'https://api.openweathermap.org/data/2.5/weather?zip={ZIP},us&appid={KEY}';

  constructor(
    private weatherService: WeatherService,
  ) { }


  checkZip(): void{
    let zipCode = parseInt(this.zip);
    if(Number.isNaN(zipCode)){
      this.handleError("The zip code needs to be only numbers")
    }
    else if(zipCode  < 10000 && this.zip[0] === '0' && this.zip.length === 5 && zipCode > 999){
      this.handleData(this.zip);
      this.handleError('');
    } else if(zipCode > 9999 && zipCode <= 99999) {
      this.handleData(this.zip);
      this.handleError('');
    } else {
      this.handleError('ZIP code must be a 5 digit number')
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
    this.error = message;
  }
}
