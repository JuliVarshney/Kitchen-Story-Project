import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  /* --------- Properties --------- */

  constructor(private cartService:CartService) {
    this.cartService.clearCart();
  }

  ngOnInit(): void {
  }

}