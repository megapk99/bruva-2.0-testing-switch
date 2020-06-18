import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'products',
    loadChildren: () => import('../products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../auth/components/login/login.component').then(m => m.LoginComponent)
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
