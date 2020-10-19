import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../_services/order.service';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-orders-edit',
  templateUrl: './orders-edit.component.html',
  styleUrls: ['./orders-edit.component.css'],
})
export class OrdersEditComponent implements OnInit {
  id;
  orderDetails: any = {};
  products = [];
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getOrderInfo();
    console.log(this.products);
  }

  getOrderInfo() {
    if (this.id) {
      this.orderService.getOrderDetails(this.id).subscribe((p) => {
        console.log(p);
        this.orderDetails = p;
        console.log(this.orderDetails.items);
        this.getProductDetails();
      });
    }
  }

  getProductDetails() {
    // tslint:disable-next-line: forin
    for (const id in this.orderDetails.items) {
      // console.log(cart);
      // tslint:disable-next-line: triple-equals
      this.productService.get(this.orderDetails.items[id].productId).subscribe(x => {
        this.products.push(x);
      });
      console.log(this.products);
    }
  }

  ngOnInit(): void {}
}
