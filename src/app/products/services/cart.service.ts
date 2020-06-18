import { Injectable, AfterContentChecked } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../interfaces/product.interface';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import {  Observable } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import { provideRoutes } from '@angular/router';
import {v4 as uuid} from 'uuid';
@Injectable({
  providedIn: 'root'
})

export class CartService {
  user: firebase.User;
   
  constructor(private fs:AngularFirestore,private auth: AuthService, private as:AuthService) { }

  // addToCart(product: Product){
  //     console.log (product)
  //     this.auth.getUserState().pipe(switchMap(user => {(user); 
  //       return this.fs.collection(`Users/${user.uid}/cart`).add({product})}) ).subscribe()
   
    
  // }
  addToCart(product: Product){
    const itemId =  uuid();

    const absProduct = {
       itemId,
       colors: product.colors,
       image: product.image1,
       name: product.name,
       price: product.Price,
       productId: product.Id,
    } 
    console.log(absProduct);
    
    this.auth.getUserState().pipe(
      switchMap((user: any) => {
        return this.fs.collection(`cartItems`).doc(itemId).set({...absProduct, userId: user.uid})
      })
    ).subscribe()
}
  getProduct() {

    return this.auth.getUserState().pipe(switchMap(user => {
    return this.fs.collection(`cartItems`).get()
    
        }
    ));
      }
     
    
      
      delete(id){
        return this.auth.getUserState().pipe(switchMap(user => {

        return this.fs.doc(`cartItems/${id}`).delete()
        }));
      }

      save(id, amount){
        return this.auth.getUserState().pipe(switchMap(user => {

          return this.fs.doc(`cartItems/${id}`).update({
            amount
          })
          }));
      }
}

