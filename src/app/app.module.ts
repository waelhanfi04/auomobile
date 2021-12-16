import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header2Component } from './components/layouts/header2/header2.component';
import { Footer2Component } from './components/layouts/footer2/footer2.component';
import { CarDetailSidebarComponent } from './components/layouts/car-detail-sidebar/car-detail-sidebar.component';
import { UserSidebarComponent } from './components/layouts/user-sidebar/user-sidebar.component';
import { ListingSidebarComponent } from './components/layouts/listing-sidebar/listing-sidebar.component';
import { AdvertisingSidebarComponent } from './components/layouts/advertising-sidebar/advertising-sidebar.component';
import { BlogSidebar2Component } from './components/layouts/blog-sidebar2/blog-sidebar2.component';
import { Homepage2Component } from './components/pages/homepage2/homepage2.component';
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
import { BlogListComponent } from './components/pages/blog-list/blog-list.component';
import { BlogRightComponent } from './components/pages/blog-right/blog-right.component';
import { BlogGalleryComponent } from './components/pages/blog-gallery/blog-gallery.component';
import { BlogVideoComponent } from './components/pages/blog-video/blog-video.component';
import { BlogQuoteComponent } from './components/pages/blog-quote/blog-quote.component';
import { BlogDetailLeftComponent } from './components/pages/blog-detail-left/blog-detail-left.component';
import { BlogDetailRightComponent } from './components/pages/blog-detail-right/blog-detail-right.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {IsConnectedService} from './services/IsConnectedService.service'
import { AuthentificationService } from './services/authentification/authentification.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterProComponent } from './components/pages/register-pro/register-pro.component';
import {CreateAccountComponent } from './components/pages/create-account/create-account.component'
import {CarService} from './services/car/car.service'
import {UpdateCarComponent} from './components/pages/update-car/update-car.component';
import { AddBlogComponent } from './components/pages/add-blog/add-blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
//import { NgxEditorModule } from 'ngx-editor';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdateBlogComponent } from './components/pages/update-blog/update-blog.component';
import { CustomFormsModule } from 'ng2-validation';
import { BannerHeaderComponent } from './components/layouts/banner-header/banner-header.component';
import { MySpaceComponent } from './components/pages/my-space/my-space.component';
import { UpdateProfileComponent } from './components/pages/update-profile/update-profile.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdatePasswordComponent } from './components/pages/update-password/update-password.component'
@NgModule({
  declarations: [
    AppComponent,
    Header2Component,
    Footer2Component,
    CarDetailSidebarComponent,
    UserSidebarComponent,
    ListingSidebarComponent,
    BlogSidebar2Component,
    Homepage2Component,
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
    BlogRightComponent,
    BlogGalleryComponent,
    BlogVideoComponent,
    BlogQuoteComponent,
    BlogDetailLeftComponent,
    BlogDetailRightComponent,
    PricingComponent,
    ContactComponent,
    RegisterProComponent,
    CreateAccountComponent,
    UpdateCarComponent,
    AddBlogComponent,
    BlogDetailsComponent,
    BlogListComponent,
    AdvertisingSidebarComponent,
    UpdateBlogComponent,
    BannerHeaderComponent,
    MySpaceComponent,
    UpdateProfileComponent,
    UpdatePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
 //   NgxEditorModule,
    CustomFormsModule,
   // NgbModule
  ],
  providers: [IsConnectedService,AuthentificationService,CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
