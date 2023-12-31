import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  /* --------- Properties --------- */
  cart!:Cart; //will hold the cart details (shouldn't be nullable)


  /* --------- Constructor --------- */
  //Inject a private CartService object into the Cart-Page component
  //Use the Cart Service to get the cart observable and subscribe to it
  //We will update the cart property each time we have a new event on the cart observable
  constructor(private cartService:CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
   }
   /* For testing purposes for the cart page:
     1. Add constructor parameter: private productService:ProductService
     2. Add test code:
        let products = productService.getAllProducts();
        cartService.addToCart(products[1]);
        cartService.addToCart(products[2]);
        cartService.addToCart(products[3]);
  */

  /* --------- Methods --------- */
  /* *******************************************
   * Method Name: ngOnInit()
   * Access Type: public
   * Input Parameters: none
   * Return Type: void
   * Purpose: A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   *          Define an ngOnInit() method to handle any additional initialization tasks.
   * ******************************************* */
  ngOnInit(): void {
  }

  /* *******************************************
   * Method Name: removeFromCart()
   * Access Type: public
   * Input Parameters: CartItem object
   * Return Type: void
   * Purpose: Use the Cart Service to remove a CartItem object from the cart and update the cart object
   * ******************************************* */
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.product.productId);
  }

  /* *******************************************
   * Method Name: changeQuanity()
   * Access Type: public
   * Input Parameters: CartItem object, string representation of desired quantity
   * Return Type: void
   * Purpose: Use the Cart Service to change the quanity of the CartItem object and refresh the cart object
   * ******************************************* */
  changeQuanity(cartItem:CartItem, quanityInString:string){
    const quantity = parseInt(quanityInString); //convert the string from the drop-down box into a number
    this.cartService.changeQuanity(cartItem.product.productId, quantity);
  }
}
