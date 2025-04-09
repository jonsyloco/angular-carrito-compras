import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name:'',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}


  onSubmit() {
    console.warn('You order has been submitted', this.checkoutForm.value, this.cartService.getItems());
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }  


}
