import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthService} from './auth/services/auth/auth.service';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoritesComponent } from './products/components/favorites/favorites.component';
import { CheckoutComponent } from './products/components/checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './products/components/orders/orders.component';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule
    
  ],
  providers: [
    AuthService
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    FavoritesComponent,
    CheckoutComponent,
    OrdersComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
