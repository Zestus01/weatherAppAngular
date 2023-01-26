import { Component } from '@angular/core';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.css']
})
export class ZipComponent {

  zip: string = '';
  message: string | undefined;
  
  checkZip(): boolean{
    let zipCode = parseInt(this.zip);
    if(zipCode  < 10000 && this.zip[0] === '0' && this.zip.length === 5 && zipCode > 999){
      return true;
    } else if(zipCode > 9999 && zipCode <= 99999) {
      return true;
    } else {
      return false;
    }
  }


}
