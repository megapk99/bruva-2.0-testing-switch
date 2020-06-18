import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { FavoritesComponent} from './components/favorites/favorites.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { LoginComponent} from '../auth/components/login/login.component';
import { CheckoutComponent } from './components/checkout/checkout.component'
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'product-info/:id',
    component: ProductInfoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
  static components = [
    HomeComponent,
    ProductInfoComponent,
    CartComponent
    
  ];
}
