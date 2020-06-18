import { Component, OnInit } from '@angular/core';

import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import {FavoritesService} from 'src/app/products/services/favorites.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: firebase.User;
  products: Product[] = [];
  add: number= -1


  constructor(private auth: AuthService,private gs: ProductsService,private cs:CartService, private fs:FavoritesService) { }


  ngOnInit(): void {
    this.gs.getAllProducts().subscribe(data => this.products = data);
    this.auth.getUserState()
      .subscribe( user => {
        this.user = user;
      })

  }

  addToCart(index:number) {
    let selectedProduct = this.products [this.add = +index] 
    console.log (index);
    this.cs.addToCart(selectedProduct)
  }
addToFavorites(index:number) {
  let selectedProduct = this.products [this.add = +index] 
  console.log (index);
  this.fs.addToFavorites(selectedProduct)
}




ToProducts(){
  document.getElementById("products").scrollIntoView({behavior:"smooth"});
}

}

