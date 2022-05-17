import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { VideoPopupComponent } from '../../components/video-popup/video-popup.component';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss'],
})
export class ProductTypeComponent implements OnInit {
  videoSrc: string;
  productTypeName: string;
  productTypeDescription: string;
  products: any;
  safeBannerVideoSrc: SafeResourceUrl;
  showVideo: boolean = true;
  idLanguage : string = '1';

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly domSanitizer: DomSanitizer,
    private readonly matDialog: MatDialog,
    private readonly productService: ProductService,
    private httpClient: HttpClient,
    private translate: TranslateService
  ) {

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

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url.includes('urun-grubu')) {
          this.closeSidebar();
        }
      });

    var groupNumber = this.route.snapshot.params.id;
    if (groupNumber > 0) {
      this.httpClient.get<any>(environment.APIEndpoint + "Site/GetGroup?idGroup="+groupNumber).subscribe((response) => {
        this.productTypeName = response.name;
        this.productTypeDescription = response.desc;
         
        if (!response.youtubeLink.includes('youtube')) {
          this.showVideo = false;
        }
        this.videoSrc = response.youtubeLink;
        var videoId = this.videoSrc.slice(this.videoSrc.lastIndexOf('watch?v='));
        this.videoSrc.substr(0, this.videoSrc.indexOf('watch?v=')); 
        this.videoSrc = response.youtubeLink?.replace('watch?v=','embed/');
        videoId = videoId.replace('watch?v=','')
        this.safeBannerVideoSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videoSrc + '?autoplay=1&rel=0&loop=1&playlist='+ videoId);
        this.products = response.products;
         
      });
    }  
      
  }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) => {
    //   const {
    //     name,
    //     description,
    //     videoId,
    //   } = this.productService.getProductType(params.get('id'));
    //    
    //   this.productTypeName = name;
    //   this.productTypeDescription = description;
    //   this.videoSrc = 'https://www.youtube.com/embed/' + videoId;
    //   this.products = this.productService.getProducts(params.get('id'));
    //   this.safeBannerVideoSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videoSrc + '?autoplay=1&rel=0&loop=1&playlist=' + videoId);
    // });
  }

  onPlayClick(): void {
    const dialogRef = this.matDialog.open(VideoPopupComponent, {
      panelClass: ['app-custom', 'app-panel'],
      data: { src: this.videoSrc },
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  private closeSidebar(): void {
    if (document.body.classList.contains('sidebar-active')) {
      const el = document.getElementById('appSidebarToggle');
      el.click();
    }
  }
}
