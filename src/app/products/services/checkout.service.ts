import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { Product } from '../interfaces/product.interface';
import { switchMap } from 'rxjs/operators';
import {v4 as uuid} from 'uuid';
import { CartService } from './cart.service';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  user: firebase.User;


  constructor(private fs: AngularFirestore,private auth: AuthService) { }

 

  addToCheckout(product: Product) {
    
    let orderId =  uuid();
    const absProduct = {
      
      productId: product.Id,
      orderId,
      sellerId: product.sellersId,
     
   } 
   console.log(absProduct);
    this.auth.getUserState().pipe(switchMap((user: any) => {
    
      return this.fs.collection(`orders`).doc(orderId).set({...absProduct, userId: user.uid,product})
      
    })).subscribe()
   

  }

  // create_NewCustomer(record) {
   
  //   return this.fs.collection('orders').doc(orderId).set(record)
  // }

  // info(name: string, address: string, mobile: string, city: string){
  //   console.log(name);
  //   const orderId =  uuid();
  //    const userinfo = {
  //      userName: name,
  //      userAddress: address,
  //      userMobile: mobile,
  //      userCity: city,
       
  //    }
  //    this.auth.getUserState().pipe(switchMap((user: any) => {
 
  //      return this.fs.collection(`orders`).doc(orderId).update({...userinfo})
  //    })).subscribe()
 
 
  //  }
  
}
