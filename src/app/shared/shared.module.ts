import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/services/auth/auth.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  declarations: [

  ],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
