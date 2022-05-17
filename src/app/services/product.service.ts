import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProductType(
    id: string
  ): {
    name: string;
    description: string;
    videoId: string;
  } {
    switch (id) {
      case '0':
        return {
          name: 'Atlas Led Yüksek Tavan',
          description: `Kendine özgü tasarımıyla şık bir görünümün yanı sıra ısınmaya karşı dayanıklı aluminyum gövde ve grup lens ile diğer geleneksel projektörlere göre %80’e varan enerji tasarrufu sağlar ve çok daha uzun ömürlüdür.`,
          videoId: 'TwMUdHox-dI',
        };
      case '1':
        return {
          name: 'Clove',
          description: `Özel olarak tasarlanmış gövde yapısıyla ince bir görünüm ve montaj kolaylığı sağlamasının yanı sıra gövdeye dizilmiş yüksek verimli LED çipler sayesinde yüksek lümen seviyesi ve homojenliği bir arada sağlar.
          Geleneksel aydınlatma armatürlerine göre %60'a varan enerji tasarrufu yapmanıza yardımcı olur.`,
          videoId: 'yStV6liiNRk',
        };
      default:
        return null;
    }
  }

  getProducts(id: string): Product[] {
    switch (id) {
      case '0':
        return this.getDaisy();
      case '1':
        return this.getClove();
      default:
        return null;
    }
  }

  private getDaisy(): Product[] {
    return [
      {
        productId: '0',
        productCategoryId: '0',
        productImageSrc: 'assets/images/product/example1.jpeg',
        productCategoryName: 'LED YÜKSEK TAVAN', 
        productName: 'Atlas Led Yüksek Tavan 50W 60cm',
        productDetail: {
          description:
            'Zorlu ortam koşullarında kullanılmak üzere tasarlanmış gövde yapısıyla su ve toz gibi dış etkenlere karşı koruma sağlar. Verimliliği yüksek led çipler ve özel olarak tasarlanan reflektörüyle yüksek lümen ihtiyacınızı karşılamanıza yardımcı olur.',
        },
      },
      // {
      //   productId: '1',
      //   productCategoryId: '0',
      //   productImageSrc: 'assets/images/products/da2.jpg',
      //   productCategoryName: 'PROJEKTÖRLER',
      //   productName: 'Örnek 2',
      //   productDetail: {
      //     description:
      //       'Kendine özgü tasarımıyla şık bir görünümün yanı sıra ısınmaya karşı dayanıklı aluminyum gövde ve grup lens ile diğer geleneksel projektörlere göre %80’e varan enerji tasarrufu sağlar ve çok daha uzun ömürlüdür.',
      //   },
      // },
      // {
      //   productId: '2',
      //   productCategoryId: '0',
      //   productImageSrc: 'assets/images/products/da3.jpg',
      //   productCategoryName: 'PROJEKTÖRLER',
      //   productName: 'Örnek 3',
      //   productDetail: {
      //     description:
      //       'Kendine özgü tasarımıyla şık bir görünümün yanı sıra ısınmaya karşı dayanıklı aluminyum gövde ve grup lens ile diğer geleneksel projektörlere göre %80’e varan enerji tasarrufu sağlar ve çok daha uzun ömürlüdür.',
      //   },
      // },
      // {
      //   productId: '3',
      //   productCategoryId: '0',
      //   productImageSrc: 'assets/images/products/da4.jpg',
      //   productCategoryName: 'PROJEKTÖRLER',
      //   productName: 'Örnek 4',
      //   productDetail: {
      //     description:
      //       'Kendine özgü tasarımıyla şık bir görünümün yanı sıra ısınmaya karşı dayanıklı aluminyum gövde ve grup lens ile diğer geleneksel projektörlere göre %80’e varan enerji tasarrufu sağlar ve çok daha uzun ömürlüdür.',
      //   },
      // },
      // {
      //   productId: '4',
      //   productCategoryId: '0',
      //   productImageSrc: 'assets/images/products/da5.jpg',
      //   productCategoryName: 'PROJEKTÖRLER',
      //   productName: 'Örnek 5',
      //   productDetail: {
      //     description:
      //       'Kendine özgü tasarımıyla şık bir görünümün yanı sıra ısınmaya karşı dayanıklı aluminyum gövde ve grup lens ile diğer geleneksel projektörlere göre %80’e varan enerji tasarrufu sağlar ve çok daha uzun ömürlüdür.',
      //   },
      // },
    ];
  }

  private getClove(): Product[] {
    return [
      {
        productId: '0',
        productCategoryId: '1',
        productImageSrc: 'assets/images/products/cl1.png',
        productCategoryName: 'Clove',
        productName: 'Slim Backlight Led Panel',
        productDetail: {
          description: `Özel olarak tasarlanmış gövde yapısıyla ince bir görünüm ve montaj kolaylığı sağlamasının yanı sıra gövdeye dizilmiş yüksek verimli LED çipler sayesinde yüksek lümen seviyesi ve homojenliği bir arada sağlar. Geleneksel aydınlatma armatürlerine göre %60'a varan enerji tasarrufu yapmanıza yardımcı olur.`,
        },
      },
      {
        productId: '1',
        productCategoryId: '1',
        productImageSrc: 'assets/images/products/cl2.png',
        productCategoryName: 'Clove',
        productName: 'Slim Backlight Led Panel Clip-In',
        productDetail: {
          description: `Özel olarak tasarlanmış gövde yapısıyla ince bir görünüm ve montaj kolaylığı sağlamasının yanı sıra gövdeye dizilmiş yüksek verimli LED çipler sayesinde yüksek lümen seviyesi ve homojenliği bir arada sağlar. Geleneksel aydınlatma armatürlerine göre %60'a varan enerji tasarrufu yapmanıza yardımcı olur.`,
        },
      },
    ];
  }
}
