import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'koronat';
  okudumOnayi:boolean= false;
  asama = 1;

  cevapOksuruk = 0;
  cevapAtes = 0;
  cevapNefes = 0;

  start(){
    if(this.okudumOnayi){
      this.asama = 2;
    }
  }

  setOksuruk(){
    this.asama = 3;
  }  
  setAtes(){
    this.asama = 4;
  }
  setNefes(){
    this.asama = 5;
  }
}
