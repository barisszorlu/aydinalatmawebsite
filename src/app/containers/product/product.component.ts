import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { async } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Accordion, AccordionItem } from '../../models/accordion.model';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import M from 'materialize-css';


declare const $:any;


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[];
  product: Product;
  productData: any;
  documents: any;
  showDocuments: boolean;
  guides:any;
  showGuides: boolean;
  productTypeName: string;
  medias: any;
  options = { fullWidth: false };
  showSlider : boolean = false;
  images = [];
  subSlider: string = ``;


  accordionContents: Accordion[] = [
    // {
    //   iconClass: 'fas fa-file-alt',
    //   title: 'Data Sheet',
    //   items: [
    //     { title: 'Datasheet', href: 'https://3ndata.net/datapanel/pdfweb/ATLAS/136' },
    //   ],
    // },
    // {
    //   iconClass: 'fas fa-certificate',
    //   title: 'Klavuz',
    //   items: [
    //     { title: 'Montaj Klavuz', href: '' },
    //   ],
    // },
  ];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService,
    private httpClient: HttpClient,
  ) {
   this.httpClient.get<any>(environment.APIEndpoint + "Site/GetByIdProduct?idProduct=" + this.route.snapshot.params.productId)
      .subscribe(async (response) => {
        debugger;
        this.productData = response;
        this.documents = response?.datasheets;
        this.guides = response?.guides;
        this.medias = response?.medias;
        this.medias.forEach((element) =>
        this.images.push({ path: element.media })
      );
        this.showSlider = true;

        if (this.documents != null && this.documents != undefined) {
          if (this.documents.length>0) {
            this.accordionContents.push(
              {
                iconClass: 'fas fa-file-alt',
                title: 'DATASHEET',
                items: await this.getItems(this.documents),
              }
            );
          }
        }
        if (this.guides != null && this.guides != undefined) {
          if (this.guides.length>0) {
            this.accordionContents.push(
              {
                iconClass: 'fas fa-file-certificate',
                title: 'Klavuz',
                items: await this.getItems(this.guides),
              }
            );
          }
      }
      });
  }

  ngOnInit(): void {

    // this.route.paramMap.subscribe((params) => {
    //   const typeId = params.get('typeId');
    //   const productId = params.get('productId');
    //   const products = this.productService.getProducts(typeId);
    //   this.product = products.find(
    //     (product) => product.productId === productId
    //   );
    //   this.products = products.filter(
    //     (product) => product.productId !== productId
    //   );

    //   this.productTypeName = this.productService.getProductType(typeId).name;
    // });
  }

    ngAfterViewInit(){
      let elems = document.querySelectorAll('.carousel');
      let instances = M.Carousel.init(elems, this.options);
  }

  async getItems(array: any){
    var accordionContents = new Array<AccordionItem>();
    array.forEach(element => {
      accordionContents.push({ title: element?.name, href: element?.link });
    });
    return accordionContents;
  }

}
