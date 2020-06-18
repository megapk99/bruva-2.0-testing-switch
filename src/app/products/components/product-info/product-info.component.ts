import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  

  product: Product;
  productColor: string[];
  constructor(private route: ActivatedRoute, private gs: ProductsService,private cs :CartService, private fs :FavoritesService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params.id;
    this.gs.getProduct(productId).subscribe(doc => {
      if (doc.exists) {
        this.product = doc.data();
      }
    });
  }
  addToCart(product:Product) {
    product['Color'] = this.productColor;
    this.cs.addToCart(product)
  }
addToFavorites(product:Product )  {
this.fs.addToFavorites(product)
} 


}
 