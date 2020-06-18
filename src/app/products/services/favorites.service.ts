import { Injectable, AfterContentChecked } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../interfaces/product.interface';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { Observable } from 'rxjs';
import { switchMap, flatMap, map, tap, scan } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class FavoritesService {
  user: firebase.User;

  constructor(private fs: AngularFirestore, private auth: AuthService, private as: AuthService, private db: AngularFirestore) { }

  addToFavorites(product: Product) {
    console.log(product)
    this.auth.getUserState().pipe(switchMap(user => {

      return this.fs.collection(`products`).doc(product.Id).update({
        fav: firebase.firestore.FieldValue.arrayUnion(user.uid)
      })
    })).subscribe()


  }
  getProduct() {

    return this.auth.getUserState().pipe(switchMap(user => {
      return this.fs.collection(`products`, ref =>
        ref.where('fav', 'array-contains', user.uid))
        .snapshotChanges()
        .pipe(
          flatMap(fav => fav),
          map((query) => query.payload.doc.data()),
          scan((acc, item) => [...acc, item], []),
          tap((data) => console.log(data))
        );
    }));
  }


  delete(product:string) {
    console.log(product)
    return this.auth.getUserState().pipe(switchMap(user => {
      return this.fs.collection(`products`).doc(product).update( { fav:firebase.firestore.FieldValue.arrayRemove(user.uid)})
    }));


  }}
