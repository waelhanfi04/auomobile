import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './components/layouts/header1/header1.component';
import { Header2Component } from './components/layouts/header2/header2.component';
import { Header3Component } from './components/layouts/header3/header3.component';
import { Header4Component } from './components/layouts/header4/header4.component';
import { Footer1Component } from './components/layouts/footer1/footer1.component';
import { Footer2Component } from './components/layouts/footer2/footer2.component';
import { Footer3Component } from './components/layouts/footer3/footer3.component';
import { Footer4Component } from './components/layouts/footer4/footer4.component';
import { Footer5Component } from './components/layouts/footer5/footer5.component';
import { CarDetailSidebarComponent } from './components/layouts/car-detail-sidebar/car-detail-sidebar.component';
import { UserSidebarComponent } from './components/layouts/user-sidebar/user-sidebar.component';
import { ListingSidebarComponent } from './components/layouts/listing-sidebar/listing-sidebar.component';
import { BlogSidebar1Component } from './components/layouts/blog-sidebar1/blog-sidebar1.component';
import { BlogSidebar2Component } from './components/layouts/blog-sidebar2/blog-sidebar2.component';
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

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    Header2Component,
    Header3Component,
    Header4Component,
    Footer1Component,
    Footer2Component,
    Footer3Component,
    Footer4Component,
    Footer5Component,
    CarDetailSidebarComponent,
    UserSidebarComponent,
    ListingSidebarComponent,
    BlogSidebar1Component,
    BlogSidebar2Component,
    Homepage1Component,
    Homepage2Component,
    Homepage3Component,
    Homepage4Component,
    Homepage5Component,
    Homepage6Component,
    Homepage7Component,
    MediaComponent,
    ListingComponent,
    Listing1Component,
    Listing2Component,
    Listing3Component,
    Listing4Component,
    Listing1Style2Component,
    Listing2Style2Component,
    AddListingComponent,
    AboutusComponent,
    CarDetailsComponent,
    CarpageComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    InvoiceComponent,
    Error404Component,
    ComingSoonComponent,
    BlogGridComponent,
    BlogLeftComponent,
    BlogRightComponent,
    BlogStandardComponent,
    BlogGalleryComponent,
    BlogVideoComponent,
    BlogQuoteComponent,
    BlogDetailLeftComponent,
    BlogDetailRightComponent,
    PricingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
