import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { OrdersService } from '../../services/orders.service';
import { Product } from '../../interfaces/product.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
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
}
