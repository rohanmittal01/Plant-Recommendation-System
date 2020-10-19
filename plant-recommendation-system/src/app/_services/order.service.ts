import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderData: any = {};
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient, private authService: AuthService) { }

  postOrder(){
    return this.http.post(this.baseUrl + 'orders', this.orderData);
  }

  getOrders(){
    return this.http.get(this.baseUrl + 'orders/' + this.authService.decodedToken._id);
  }

  getAllOrders(){
    return this.http.get(this.baseUrl + 'orders/admin/' + this.authService.decodedToken._id);
  }

  getOrderDetails(orderId){
    return this.http.get(this.baseUrl+'order/id/'+orderId);
  }
}
