# Koronat


Sosyal sorumluluk projesi olarak geliştirilmektedir. Ticari hiçbir amacı bulunmamaktadır. Geliştirme konusunda desteklere açığız. 

Projede amaçlanan; Covid-19(yeni tip korona) virüsünün hızlı yayılımı sonucunda hastane ve acil yığılmalarını önlemek, halkı bilinçlendirmek ve acil durumda neler yapılmasını göstermek amaçlıdır. 

Umarız bu salgını en az kayıp ile atlatırız. 

Demo link http://koronat.vidarti.com

Edit:
Ben projeye başladıktan sonra Sağlık Bakanlığı bir app yayınladı. Sağlık bakanlığının sistemine itibar etmenizi rica ederim. Benim yazdığım sadece bir deneme. Vatanım milletim için bu dönemde ne yapabilirim diye başlamış bir proje. Bu projede hiçbir vatandaşımızın kişisel bilgileri saklanmamaktadır. Hiçbir maddi amaç yoktur. 

Sağlık Bakanlığı linki : https://koronaonlem.saglik.gov.tr/

Katsayı hesaplama aşağıdaki değerlere göre yapılmakta. Algoritmayı geliştirmek adına önerilere açığız. 
Katsayı çarpım değerini temsil ediyor. Örneğin ateş yok ise direk -2 ile çarparak toplama -16 ekliyor (16 çıkarıyor), ateşi şiddetli ise 32 ekliyor. 

|  Durum  | Katsayı | Yok  | Az | Orta  | Şiddetli |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| Ateş      | 8 x     | -2  | 2   | 3    | 4        |
| Halsizlik | 4 x     | -1  | 1   | 2    | 3        |
| Öksürük   | 6 x     | -2  | 2   | 3    | 4        |
| Koku Kaybı| 3 x     | -1  | 2   | 3    | 5        |
| Vücut Ağr | 4 x     | -1  | 1   | 2    | 3        |
| Burun Akı | 3 x     | 1   | -1  | -2   | -4       |
| Boğaz Ağr | 4 x     | -2  | 2   | 3    | 4        |
| İshal     | 2 x     | -1  | 1   | 2    | 3        |
| Baş Ağr   | 3 x     | -1  | 1   | 2    | 3        |
| Nefes Dar | 6 x     | -2  | 2   | 3    | 4        |

Sonuç < 50  Belirtiye rastlanmadı

Sonuç 50-80 Belirtiler gözüküyor dikkatli olunmalı

Sonuç > 80  Acil tıbbi destek gerekiyor 