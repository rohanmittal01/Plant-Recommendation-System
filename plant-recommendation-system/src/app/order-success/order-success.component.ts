import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { DeliveryPersonService } from '../_services/delivery-person.service';
import { OrderService } from '../_services/order.service';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  id;
  orderDetails: any = {};
  products = [];
  deliveryPersons;
  date;
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private deliveryService: DeliveryPersonService,
    private alertify: AlertifyService
  ) {

    this.getOrderInfo();
    console.log(this.products);
  }

  getOrderInfo() {

      this.orderService.getOrders().subscribe((p:any) => {
        console.log(p);
        this.orderDetails = p[p.length-1];
        this.date = new Date(this.orderDetails.datePlaced).toLocaleString();
        console.log(this.orderDetails.items);
        this.getProductDetails();
      });
    
  }

  getProductDetails() {
    // tslint:disable-next-line: forin
    for (const id in this.orderDetails.items) {
      // console.log(cart);
      // tslint:disable-next-line: triple-equals
      this.productService.get(this.orderDetails.items[id].productId).subscribe((x:any) => {
        x.quantity = this.orderDetails.items[id].quantity;
        this.products.push(x);
      });
      console.log(this.products);
    }
  }


  ngOnInit(): void {
  }
}
