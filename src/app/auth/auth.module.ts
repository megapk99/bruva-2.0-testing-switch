import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth/auth.service';


@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  providers: [AuthService],
  declarations: AuthRoutingModule.components
})
export class AuthModule { }
