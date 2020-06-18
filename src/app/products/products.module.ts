import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './services/products.service';
import { AuthService } from '../auth/services/auth/auth.service';


@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  providers: [ProductsService,AuthService],
  declarations: ProductsRoutingModule.components
})
export class ProductsModule { }
