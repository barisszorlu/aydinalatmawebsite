import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './containers/about/about.component';
import { CareerComponent } from './containers/career/career.component';
import { CertificatesComponent } from './containers/certificates/certificates.component';
import { ContactComponent } from './containers/contact/contact.component';
import { HomeComponent } from './containers/home/home.component';
import { ProductTypeComponent } from './containers/product-type/product-type.component';
import { ProductComponent } from './containers/product/product.component';
import { ReferencesComponent } from './containers/references/references.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'product-group/:productTypeName  /:productName/:productId',
    component: ProductComponent,
  },
  { path: 'product-group/:id', component: ProductTypeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'career', component: CareerComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'sertifikalar', component: CertificatesComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
