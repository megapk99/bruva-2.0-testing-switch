import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { Product } from '../interfaces/product.interface';
import { switchMap } from 'rxjs/operators';
import {v4 as uuid} from 'uuid';
import { CartService } from './cart.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  user: firebase.User;


  constructor(public router: Router,private fs: AngularFirestore,private auth: AuthService) { }

 

  addToCheckout(products: any,addinfo) {
    console.log(products, addinfo);
    let orderId =  uuid();
    const absProducts = {
      orderId,
     cartItemId: products.filter((product) => product.Id),
     sellerId: products.filter((product) => product.sellerId),
   } 
   console.log(absProducts);
    this.auth.getUserState().pipe(switchMap((user: any) => {
    
      return this.fs.collection(`orders`).doc(orderId).set({...absProducts, ...addinfo, userId: user.uid})
      
    })).subscribe(()  => {
      alert("Trasnsaction Completed");
      this.router.navigate(['/'])
    })
   

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
