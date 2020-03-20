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
Sonuç değeri 50 puandan düşük ise hastalık belirtisi bulunmuyor deniyor. 50-80 arasında ise hasta olabilirsiniz deniyor. 80 üstünde ise acil olarak 184 ü araması isteniyor.

{
            asama: 1,
            kod: 'ates',
            baslik: 'Ateş',
            cevap: 0,
            katsayi: 8,
            secenekler : [
                { 
                    yazi: 'Yok (36,5)',
                    deger: -2
                },
                { 
                    yazi: 'Az (37-38)',
                    deger: 2
                },
                { 
                    yazi: 'Orta (38-39)',
                    deger: 3
                },
                { 
                    yazi: 'Şiddetli (39-40)',
                    deger: 4
                }
            ]
        },
        { 
            asama: 2,
            kod: 'halsizlik',
            baslik: 'Halsizlik',
            cevap: 0,
            katsayi: 4,
            secenekler : [
                { 
                    yazi: 'Yok',
                    deger: -1
                },
                { 
                    yazi: 'Az',
                    deger: 1
                },
                { 
                    yazi: 'Orta',
                    deger: 2
                },
                { 
                    yazi: 'Şiddetli',
                    deger: 3
                }
            ]
        },
        { 
            asama: 3,
            kod: 'oksuruk',
            baslik: 'Öksürük',
            cevap: 0,
            katsayi: 6,
            secenekler : [
                { 
                    yazi: 'Yok',
                    deger: -2
                },
                { 
                    yazi: 'Az',
                    deger: 2
                },
                { 
                    yazi: 'Orta',
                    deger: 3
                },
                { 
                    yazi: 'Şiddetli',
                    deger: 4
                }
            ]
        },
        { 
            asama: 4,
            kod: 'hapsirma',
            baslik: 'Hapşırma',
            cevap: 0,
            katsayi: 4,
            secenekler : [
                { 
                    yazi: 'Yok',
                    deger: 1
                },
                { 
                    yazi: 'Az',
                    deger: -1
                },
                { 
                    yazi: 'Orta',
                    deger: -2
                },
                { 
                    yazi: 'Şiddetli',
                    deger: -6
                }
            ]
        },
        { 
            asama: 5,
            kod: 'agri',
            baslik: 'Vücut Ağrısı',
            cevap: 0,
            katsayi: 4,
            secenekler : [
                { 
                    yazi: 'Yok',
                    deger: -1
                },
                { 
                    yazi: 'Az',
                    deger: 1
                },
                { 
                    yazi: 'Orta',
                    deger: 2
                },
                { 
                    yazi: 'Şiddetli',
                    deger: 3
                }
            ]
        },
        { 
            asama: 6,
            kod: 'akinti',
            baslik: 'Burun Akıntısı veya Tıkanıklığı',
            cevap: 0,
            katsayi: 3,
            secenekler : [
                { 
                    yazi: 'Yok',
                    deger: 1
                },
                { 
                    yazi: 'Az',
                    deger: -1
                },
                { 
                    yazi: 'Orta',
                    deger: -2
                },
                { 
                    yazi: 'Şiddetli',
                    deger: -4
                }
            ]
        },
        { 
            asama: 7,
            kod: 'bogazagri',
            baslik: 'Boğaz Ağrısı',
            cevap: 0,
            katsayi: 4,
            secenekler : [
                { 
                    yazi: 'Yok',
                    deger: -2
                },
                { 
                    yazi: 'Az',
                    deger: 2
                },
                { 
                    yazi: 'Orta',
                    deger: 3
                },
                { 
                    yazi: 'Şiddetli',
                    deger: 4
                }
            ]
        },
        { 
            asama: 8,
            kod: 'ishal',
            baslik: 'İshal',
            cevap: 0,
            katsayi: 2,
            secenekler : [
                { 
                    yazi: 'Yok',
                    deger: -1
                },
                { 
                    yazi: 'Az',
                    deger: 1
                },
                { 
                    yazi: 'Orta',
                    deger: 2
                },
                { 
                    yazi: 'Şiddetli',
                    deger: 3
                }
            ]
        },
        { 
            asama: 9,
            kod: 'basagri',
            baslik: 'Baş Ağrısı',
            cevap: 0,
            katsayi: 3,
            secenekler : [
                { 
                    yazi: 'Yok',
                    deger: -1
                },
                { 
                    yazi: 'Az',
                    deger: 1
                },
                { 
                    yazi: 'Orta',
                    deger: 2
                },
                { 
                    yazi: 'Şiddetli',
                    deger: 3
                }
            ]
        },
        { 
            asama: 10,
            kod: 'nefes',
            baslik: 'Nefes Darlığı',
            cevap: 0,
            katsayi: 6,
            secenekler : [
                { 
                    yazi: 'Yok',
                    deger: -2
                },
                { 
                    yazi: 'Az',
                    deger: 2
                },
                { 
                    yazi: 'Orta',
                    deger: 3
                },
                { 
                    yazi: 'Şiddetli',
                    deger: 4
                }
            ]
        },
        {
            asama: 11,
            kod: 'yas',
            baslik: 'Yaşınız',
            cevap: 0,
            katsayi: 3,
            secenekler : [
                { 
                    yazi: 'Çocuk (0 - 12)',
                    deger: -3
                },
                { 
                    yazi: 'Genç (13 - 20)',
                    deger: -2
                },
                { 
                    yazi: 'Yetişkin (21 - 35)',
                    deger: -1
                },
                { 
                    yazi: 'Orta Yaş (36 - 50)',
                    deger: 0
                },
                { 
                    yazi: 'Yaşlı (51 - 65)',
                    deger: 1
                },
                { 
                    yazi: 'İhtiyar (66 - 80)',
                    deger: 2
                },
                { 
                    yazi: 'İleri Yaş (81 - 100)',
                    deger: 3
                }
            ]
        }