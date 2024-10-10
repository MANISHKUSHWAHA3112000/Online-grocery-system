import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { CategoriesComponent } from './categories/categories.component';
import { PaginationComponent } from './pagination/pagination.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    AboutComponent,
    FooterComponent,
    ProductComponent,
    CategoriesComponent,
    PaginationComponent
  
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // FontAwesomeModule,
   
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // constructor(library: FaIconLibrary) {
  //   library.addIcons(faFacebook, faTwitter, faInstagram);
  // }
}
