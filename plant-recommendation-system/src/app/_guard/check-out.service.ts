import { Injectable } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../_services/shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {
  // tslint:disable-next-line: max-line-length
  constructor(private alertify: AlertifyService, private cartService: ShoppingCartService, private router: Router, private active: ActivatedRoute) { }

  shoppingCartItemCount = 0;
  canActivate(router, state: RouterStateSnapshot){

    this.shoppingCartItemCount = 0;
    // tslint:disable-next-line: forin
    this.shoppingCartItemCount = this.cartService.cartCount();
    // console.log('countuhiuyhiubibiubiubiub ');
    // console.log(this.shoppingCartItemCount);
    if (this.cartService.cartCount() > 0) {
      // console.log('fdnjkvehfdbjkvnedhbfkjvbfv');
      return true;
    }
    this.alertify.error('Your cart is empty!');
    // this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    this.router.navigate(['/products']);
    return false;

  }

  getShoppingCartItemCount(){

  }
}
