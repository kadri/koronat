import { Cevaplar } from './cevaplar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'koronat';
  cevaplar: Cevaplar = new Cevaplar();
  okudumOnayi:boolean= false;
  asama = 0;

  cevapOksuruk = 0;
  cevapAtes = 0;
  cevapNefes = 0;

  basla(){
    if(this.okudumOnayi){
      this.asama = 1;
    }
  }
  
  asamaIleri(){
    this.asama ++;
  }

  asamaGeri(){
    this.asama --;
  }

}
