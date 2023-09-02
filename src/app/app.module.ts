import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './forms/add-product/add-product.component';
import { LoginComponent } from './forms/login/login.component';
import { RegisterComponent } from './forms/register/register.component';
import { RemoveProductComponent } from './forms/remove-product/remove-product.component';
import { ProductComponent } from './models/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { HomeComponent } from './pages/home/home.component';
import { StarRatingModule } from 'angular-star-rating';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { HeaderComponent } from './widgets/header/header.component';
import { NotFoundComponent } from './widgets/not-found/not-found.component';
import { LoginService } from './services/login.service';

import { SearchComponent } from './widgets/search/search.component';
import { TagsComponent } from './widgets/tags/tags.component';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    LoginComponent,
    RegisterComponent,
    RemoveProductComponent,
    ProductComponent,
    CartPageComponent,
    CheckoutPageComponent,
    HomeComponent,
    OrderConfirmationComponent,
    ProductPageComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    SearchComponent,
    TagsComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot()
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
