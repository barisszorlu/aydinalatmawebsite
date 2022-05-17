import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Product, ProductDetail } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})

export class ProductDetailComponent implements OnInit {
  @Input() product: any;
  brochure: Brochure;
  showBrochure: boolean;
  idLanguage : string = '1';
  constructor(private translate: TranslateService) {

    this.idLanguage = localStorage.getItem('idLanguage');
    switch (this.idLanguage) {
      case '1':
        this.translate.use('tr');
        break;
      case '2':
        this.translate.use('en');
        break;

      default:
        this.translate.use('tr');
        break;
    }

    if (this.product?.brochureImage != null && this.product?.brochureImage != undefined) {
      this.showBrochure = true;
    }else{
      this.showBrochure = false;
    }
    // }
    // if (this.product!= null && this.product != undefined) {
    //   if (this.product?.brochureImage != null && this.product?.brochureImage != undefined) {
    //     if (this.product?.brochureImage.length > 0) {
    //       this.brochure.brochureImage = this.product?.brochureImage;
    //       this.brochure.brochureImageFileName = this.product?.brochureImageFileName;
    //       this.brochure.brochureFile = this.product?.brochureFile;
    //     }
    //   }
    // }
  }

  ngOnInit(): void { }
}

export class Brochure {
  brochureImage: string;
  brochureImageFileName: string;
  brochureFile: String;
}

