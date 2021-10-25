import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homepage1Component } from './components/pages/homepage1/homepage1.component';
import { Homepage2Component } from './components/pages/homepage2/homepage2.component';
import { Homepage3Component } from './components/pages/homepage3/homepage3.component';
import { Homepage4Component } from './components/pages/homepage4/homepage4.component';
import { Homepage5Component } from './components/pages/homepage5/homepage5.component';
import { Homepage6Component } from './components/pages/homepage6/homepage6.component';
import { Homepage7Component } from './components/pages/homepage7/homepage7.component';
import { MediaComponent } from './components/pages/media/media.component';
import { ListingComponent } from './components/pages/listing/listing.component';
import { Listing1Component } from './components/pages/listing1/listing1.component';
import { Listing2Component } from './components/pages/listing2/listing2.component';
import { Listing3Component } from './components/pages/listing3/listing3.component';
import { Listing4Component } from './components/pages/listing4/listing4.component';
import { Listing1Style2Component } from './components/pages/listing1-style2/listing1-style2.component';
import { Listing2Style2Component } from './components/pages/listing2-style2/listing2-style2.component';
import { AddListingComponent } from './components/pages/add-listing/add-listing.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { CarDetailsComponent } from './components/pages/car-details/car-details.component';
import { CarpageComponent } from './components/pages/carpage/carpage.component';
import { UserComponent } from './components/pages/user/user.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { InvoiceComponent } from './components/pages/invoice/invoice.component';
import { Error404Component } from './components/pages/error404/error404.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogLeftComponent } from './components/pages/blog-left/blog-left.component';
import { BlogRightComponent } from './components/pages/blog-right/blog-right.component';
import { BlogStandardComponent } from './components/pages/blog-standard/blog-standard.component';
import { BlogGalleryComponent } from './components/pages/blog-gallery/blog-gallery.component';
import { BlogVideoComponent } from './components/pages/blog-video/blog-video.component';
import { BlogQuoteComponent } from './components/pages/blog-quote/blog-quote.component';
import { BlogDetailLeftComponent } from './components/pages/blog-detail-left/blog-detail-left.component';
import { BlogDetailRightComponent } from './components/pages/blog-detail-right/blog-detail-right.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ContactComponent } from './components/pages/contact/contact.component';

const routes: Routes = [

{path: '', component: Homepage1Component},
{path: 'homepage2', component: Homepage2Component},
{path: 'homepage3', component: Homepage3Component},
{path: 'homepage4', component: Homepage4Component},
{path: 'homepage5', component: Homepage5Component},
{path: 'homepage6', component: Homepage6Component},
{path: 'homepage7', component: Homepage7Component},
{path: 'media', component: MediaComponent},
{path: 'listing', component: ListingComponent},
{path: 'listing1', component: Listing1Component},
{path: 'listing2', component: Listing2Component},
{path: 'listing3', component: Listing3Component},
{path: 'listing4', component: Listing4Component},
{path: 'listing1-style2', component: Listing1Style2Component},
{path: 'listing2-style2', component: Listing2Style2Component},
{path: 'add-listing', component: AddListingComponent},
{path: 'aboutus', component: AboutusComponent},
{path: 'car-detail', component: CarDetailsComponent},
{path: 'car-page', component: CarpageComponent},
{path: 'user', component: UserComponent},
{path: 'register', component: RegisterComponent},
{path: 'login', component: LoginComponent},
{path: 'invoice', component: InvoiceComponent},
{path: 'coming-soon', component: ComingSoonComponent},
{path: 'blog-grid', component: BlogGridComponent},
{path: 'blog-left', component: BlogLeftComponent},
{path: 'blog-right', component: BlogRightComponent},
{path: 'blog-standard', component: BlogStandardComponent},
{path: 'blog-gallery', component: BlogGalleryComponent},
{path: 'blog-video', component: BlogVideoComponent},
{path: 'blog-quote', component: BlogQuoteComponent},
{path: 'blog-detail-left', component: BlogDetailLeftComponent},
{path: 'blog-detail-right', component: BlogDetailRightComponent},
{path: 'pricing', component: PricingComponent},
{path: 'contact', component: ContactComponent},
{path: '**', component: Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
