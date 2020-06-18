import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders: any[] = []
  constructor(private cs: CartService) { }

  ngOnInit(): void {
    this.cs.getProduct().subscribe(querySnapshot => {
      //console.log(querySnapshot.data())
      querySnapshot.forEach(doc => {
        this.orders.push({ ...doc.data(), id: doc.id })
      });
    });
  }

  delete(id) {
    this.cs.delete(id).subscribe(() => {
      this.orders = this.orders.filter((order) => order.id !== id);
    });
  }

  save(index) {

  }

}

