import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { BlogQuoteComponent } from './components/pages/blog-quote/blog-quote.component';
import { BlogDetailLeftComponent } from './components/pages/blog-detail-left/blog-detail-left.component';
import { BlogDetailRightComponent } from './components/pages/blog-detail-right/blog-detail-right.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { RegisterProComponent } from './components/pages/register-pro/register-pro.component'
import { CreateAccountComponent } from './components/pages/create-account/create-account.component'
import { IsConnectedService } from './services/IsConnectedService.service';
import { UpdateCarComponent } from './components/pages/update-car/update-car.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { AddBlogComponent } from './components/pages/add-blog/add-blog.component';
import { UpdateBlogComponent } from './components/pages/update-blog/update-blog.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UpdateProfileComponent } from './components/userSpace/update-profile/update-profile.component';
import { MySpaceComponent } from './components/userSpace/my-space/my-space.component';
import { UpdatePasswordComponent } from './components/userSpace/update-password/update-password.component';
import { MesAnnonceComponent } from './components/userSpace/mes-annonce/mes-annonce.component';
import { GererAnnonceComponent } from './components/backOffice/gerer-annonce/gerer-annonce.component';
import { GererComptesComponent } from './components/backOffice/gerer-comptes/gerer-comptes.component';
import { AuthGuardService } from './services/authGard.service'
import { AncienCarsComponent } from './components/pages/ancien-cars/ancien-cars.component';
import { NewCarsComponent } from './components/pages/new-cars/new-cars.component';
import { FavorisComponent } from './components/userSpace/favoris/favoris.component';
import { VendeurProComponent } from './components/pages/vendeur-pro/vendeur-pro.component';
import { VendeurProDetailsComponent } from './components/pages/vendeur-pro-details/vendeur-pro-details.component';
import { BrandsListComponent } from './components/pages/brands-list/brands-list.component';
import { AddMotorcycleComponent } from './components/pages/add-motorcycle/add-motorcycle.component';
import { UpdateMotorcycleComponent } from './components/pages/update-motorcycle/update-motorcycle.component';
import { CreerAnnonceComponent } from './components/pages/creer-annonce/creer-annonce.component';
import { AddPieceNautismeComponent } from './components/pages/add-piece-nautisme/add-piece-nautisme.component';
import { UpdatePieceNautismeComponent } from './components/pages/update-piece-nautisme/update-piece-nautisme.component';
import { CarByModelComponent } from './components/pages/car-by-model/car-by-model.component';
import { ConcessionnairesComponent } from './components/pages/concessionnaires/concessionnaires.component';
import { MotoListComponent } from './components/pages/moto-list/moto-list.component';
import { AncienMotoComponent } from './components/pages/ancien-moto/ancien-moto.component';

const routes: Routes = [

  { path: '', component: Homepage2Component },
  {
    path: 'creer-une-annonce',
    component: CreerAnnonceComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'creer-une-annonce/voiture',
    component: AddListingComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'creer-une-annonce/moto',
    component: AddMotorcycleComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'creer-une-annonce/:category',
    component: AddPieceNautismeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'modifier/:category/:id',
    component: UpdatePieceNautismeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'moto/modifier/:id',
    component: UpdateMotorcycleComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [IsConnectedService]
  },
  {
    path: 'register/pro',
    component: RegisterProComponent,
    canActivate: [IsConnectedService]
  },
  {
    path: 'account/creation',
    component: CreateAccountComponent,
    canActivate: [IsConnectedService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsConnectedService]
  },
  {
    path: 'details-annonce/:id',
    component: CarDetailsComponent
  }, {
    path: 'voitures/modifier/:id',
    component: UpdateCarComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'blogs',
    component: BlogListComponent
  },
  {
    path: 'blog/:id',
    component: BlogDetailsComponent
  },
  {
    path: 'ajouter-blog',
    component: AddBlogComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'blogs/modifier/:id',
    component: UpdateBlogComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'mes-infos',
    component: UpdateProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'mon-espace',
    component: MySpaceComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'mes-annonces',
    component: MesAnnonceComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'gerer-annonces',
    component: GererAnnonceComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'comptes',
    component: GererComptesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'mot-de-passe',
    component: UpdatePasswordComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'favoris',
    component: FavorisComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'vendeur-pro',
    component: VendeurProComponent,
    // canActivate:[ AuthGuardService]
  },
  {
    path: 'vendeur-pro/:id',
    component: VendeurProDetailsComponent,
    //  canActivate:[ AuthGuardService]
  },
  {
    path: 'neuf/voiture',
    component: BrandsListComponent,
    //  canActivate:[ AuthGuardService]
  },
  {
    path: 'neuf/moto',
    component: MotoListComponent,
    //  canActivate:[ AuthGuardService]
  },
  {
    path: 'ancien-car',
    component: AncienCarsComponent
  },
  {
    path: 'ancien-moto',
    component: AncienMotoComponent
  },
  {
    path: 'brand/:brand',
    component: NewCarsComponent
  },
  {
    path: 'concessionnaires',
    component: ConcessionnairesComponent
  },
  {
    path: 'model/:model',
    component: CarByModelComponent
  },
  // {path: 'media', component: MediaComponent},
  { path: 'listing', component: ListingComponent },
  { path: 'listing1', component: Listing1Component },
  { path: 'listing2', component: Listing2Component },
  { path: 'listing3', component: Listing3Component },
  { path: 'listing4', component: Listing4Component },
  { path: 'listing1-style2', component: Listing1Style2Component },
  { path: 'listing2-style2', component: Listing2Style2Component },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'car-page', component: CarpageComponent },
  { path: 'user', component: UserComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  //{path: 'blog-left', component: BlogListComponent},
  { path: 'blog-right', component: BlogRightComponent },
  { path: 'blog-quote', component: BlogQuoteComponent },
  { path: 'blog-detail-left', component: BlogDetailLeftComponent },
  { path: 'blog-detail-right', component: BlogDetailRightComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
