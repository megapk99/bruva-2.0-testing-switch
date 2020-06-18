import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDls7gvbnKnBrttQTnDpkXK6hhLL75Ba_s",
      authDomain: "flamingo-3c522.firebaseapp.com",
      databaseURL: "https://flamingo-3c522.firebaseio.com",
      projectId: "flamingo-3c522",
      storageBucket: "flamingo-3c522.appspot.com",
      messagingSenderId: "661048369704",
      appId: "1:661048369704:web:4d5299d5a2e6652f3b8b1d",
      measurementId: "G-5TR6PZDPJB"
    }),
    CoreRoutingModule
  ],
  exports: [RouterModule]
})
export class CoreModule { }
