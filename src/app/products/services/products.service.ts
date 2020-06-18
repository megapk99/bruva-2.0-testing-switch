import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ProductsService {

  constructor(private fs: AngularFirestore) { }

  getAllProducts() {
    return this.fs.collection('products').valueChanges();
  }

  getProduct(productId) {
    return this.fs.collection('products').doc(productId).get();
  }
}
