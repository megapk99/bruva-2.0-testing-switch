import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CheckoutService } from '../../services/checkout.service';
import { Product } from '../../interfaces/product.interface';
import { Checkout } from '../../interfaces/checkout.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products: Product []= []
 user: firebase.User;
 customers: any;
  customerName: string;
  customerAddress: string;
  customerMobile: number;
  customerCity: string;
  constructor(private cs: CartService,private ccs:CheckoutService) { }

  ngOnInit(): void {
   
    this.loadStripe();
    this.cs.getProduct().subscribe(querySnapshot => {
      //console.log(querySnapshot.data())
      querySnapshot.forEach(doc => {
        this.products.push({ ...doc.data(), Id: doc.id })
      });
    });
  }

// checkout(frm){

// this.ccs.checkout(frm.value.name, frm.value.mobile, frm.value.address, frm.value.city)

// }

pay(amount) {   

  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51Gsw6xLCJ9qpCfOpVWOqZ02Bb3ZNgDAMw4wXAxlXtMS1kjTuYupF3qq8DhqZnVgguh9QvhnRCY89d6D9Nuy7mGNq00DOg1YifB',
    locale: 'auto',
    token: function (token: any) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      console.log(token)
      alert('Token Created!!');
    }
  });

  handler.open({
    name: 'Bruva',
    description: 'Your Fashion Product!',
    amount: amount * 100
  });

}

loadStripe() {

  if(!window.document.getElementById('stripe-script')) {
    var s = window.document.createElement("script");
    s.id = "stripe-script";
    s.type = "text/javascript";
    s.src = "https://checkout.stripe.com/checkout.js";
    window.document.body.appendChild(s);
  }
}


  addToCheckout(product: Product) {
    
    product['Name'] = this.customerName;
    product['Address'] = this.customerAddress;
    product['City'] = this.customerCity;
    product['Mobile'] = this.customerMobile;
   
     
       this.ccs.addToCheckout(product)
  }
  

  // CreateRecord() {
  //   let record = {};
  //   record['Name'] = this.customerName;
  //   record['Address'] = this.customerAddress;
  //   record['City'] = this.customerCity;
  //   record['Mobile'] = this.customerMobile;
  //   this.ccs.create_NewCustomer(record).then(resp => {
  //     this.customerName = "";
  //     this.customerMobile = undefined;
  //     this.customerAddress = "";
  //     this.customerCity = "";
  //     console.log(resp);
  //   })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }


}
