import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  cityName:any;
  title = 'csm';
  // colorRed = 'red';
  // colorGreen = 'green';
  showGreen = false;
  showRed = false;
  color = 'abc';
  display = true;
  names = [
    {
      firstname: 'Ajit',
      address: 'BBSR'
    },
    {
      firstname: 'Anirudha',
      address: 'CTC'
    }
  ];
  toggleWithButton(){
    this.display= !this.display;
  }
  showMyName(name:string, address:string, ...monalisha){
    const [x, y] = monalisha;
    console.log(x, y);
    console.log(name, address);
    console.log(monalisha.length);
    const names = ["Ajit", "Anirudha"];
    console.log(["Subhra", "Santosh", ...names]);
  }
  displayName(value){
    this.name = value;
  }
}
