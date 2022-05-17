import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-slide',
  templateUrl: './product-slide.component.html',
  styleUrls: ['./product-slide.component.scss'],
})
export class ProductSlideComponent implements OnInit {
  @Input() product: any;
  @Input() productTypeName: any;
  imageSrc: string;
  category: string;
  name: string;
  categoryHref: string;
  productHref: string;

  constructor(
    private readonly route: ActivatedRoute, private translate: TranslateService
  ) {
    var idLanguage = localStorage.getItem('idLanguage');
    switch (idLanguage.toString()) {
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
  }

  ngOnInit(): void {
     
    this.imageSrc = this.product.previewImage;
    this.category = this.productTypeName;
    this.name = this.product.productName;
    this.categoryHref = '/urun-grubu/' + this.route.snapshot.params.id;
    debugger;
    this.productHref ='urun-grubu/' + this.productTypeName.replace(/Ü/gim, "u")
		.replace(/Ş/gim, "s")
		.replace(/I/gim, "i")
		.replace(/İ/gim, "i")
		.replace(/Ö/gim, "o")
		.replace(/Ç/gim, "c")
		.replace(/ğ/gim, "g")
		.replace(/ü/gim, "u")
		.replace(/ş/gim, "s")
		.replace(/ı/gim, "i")
		.replace(/ö/gim, "o")
		.replace(/ç/gim, "c")
    .replace(/ /gim, "-").toLowerCase( )+'/' +this.product.productName.replace(/Ğ/gim, "g")
		.replace(/Ü/gim, "u")
		.replace(/Ş/gim, "s")
		.replace(/I/gim, "i")
		.replace(/İ/gim, "i")
		.replace(/Ö/gim, "o")
		.replace(/Ç/gim, "c")
		.replace(/ğ/gim, "g")
		.replace(/ü/gim, "u")
		.replace(/ş/gim, "s")
		.replace(/ı/gim, "i")
		.replace(/ö/gim, "o")
		.replace(/ç/gim, "c")
    .replace(/ /gim, "-").toLowerCase( )

    + '/' + this.product.idProduct;
  }
}
