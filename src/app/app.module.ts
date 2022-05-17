import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CarousedComponent } from './components/product-carousel/caroused/caroused.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SlideComponent } from './components/slider/slide/slide.component';
import { SliderComponent } from './components/slider/slider.component';
import { UsageFieldsComponent } from './components/usage-fields/usage-fields.component';
import { VideoPopupComponent } from './components/video-popup/video-popup.component';
import { HomeComponent } from './containers/home/home.component';
import { ProductTypeComponent } from './containers/product-type/product-type.component';
import { ProductComponent } from './containers/product/product.component';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { ProductSlideComponent } from './components/product-slider/product-slide/product-slide.component';
import { AboutComponent } from './containers/about/about.component';
import { ContactComponent } from './containers/contact/contact.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { DocumentActionsComponent } from './components/document-actions/document-actions.component';
import { FormsModule } from '@angular/forms';
import { CareerComponent } from './containers/career/career.component';
import { ReferencesComponent } from './containers/references/references.component';
import { CertificatesComponent } from './containers/certificates/certificates.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './components/carousel/carousel.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient)
{
  return new TranslateHttpLoader(http, './assets/i18n/','.json');
}



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    SlideComponent,
    LoadingComponent,
    HeaderComponent,
    SidebarComponent,
    UsageFieldsComponent,
    FooterComponent,
    NewsletterComponent,
    ProductComponent,
    ProductCarouselComponent,
    CarousedComponent,
    ProductDetailComponent,
    ProductTableComponent,
    ProductTypeComponent,
    VideoPopupComponent,
    ProductSliderComponent,
    ProductSlideComponent,
    AboutComponent,
    ContactComponent,
    AccordionComponent,
    DocumentActionsComponent,
    CareerComponent,
    ReferencesComponent,
    CertificatesComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatTreeModule,
    MatIconModule,
    HttpClientModule,
    IvyCarouselModule,
    TranslateModule.forRoot({
      defaultLanguage: 'tr',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [
    CommonModule,
    TranslateModule
  ]
})
export class AppModule {}
