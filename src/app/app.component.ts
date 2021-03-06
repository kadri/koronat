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

  sonuc = 0;
  sonucRenk = 'primary';

  basla(){
    if(this.okudumOnayi){
      this.asama = 1;
    }
  }
  
  asamaIleri(){
    this.asama ++;
    this.hesapla();
  }

  asamaGeri(){
    this.asama --;
  }

  hesapla(){
    this.sonuc = 0;
    this.cevaplar.Dizi.forEach(eleman => {
      this.sonuc += eleman.katsayi * eleman.cevap;
    });
    if(this.sonuc > 50 && this.sonuc <=80){
      this.sonucRenk = 'accent';
    }
    else if(this.sonuc > 80){
      this.sonucRenk = 'warn';
    }
    else{
      this.sonucRenk = 'primary';
    }
  }
}
