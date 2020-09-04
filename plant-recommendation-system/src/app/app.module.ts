import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NoRouteComponent } from './no-route/no-route.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { DeliveryPersonFormComponent } from './delivery-person-form/delivery-person-form.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminDeliveryPersonComponent } from './admin/admin-delivery-person/admin-delivery-person.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { AlertifyService } from './_services/alertify.service';
import { AuthService } from './_services/auth.service';
import { ProductService } from './_services/product.service';
import { DeliveryPersonService } from './_services/delivery-person.service';
import { OrderService } from './_services/order.service';
import { ShoppingCartService } from './_services/shopping-cart.service';
import { PasswordService } from './_services/password.service';
import { ActiveDialogComponent } from './_dialogs/active-dialog/active-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ShoppingCartComponent,
    LoginComponent,
    RegisterComponent,
    NoRouteComponent,
    ProductFormComponent,
    ProductCardComponent,
    MyOrdersComponent,
    DeliveryPersonFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminDeliveryPersonComponent,
    ActiveDialogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    RouterModule.forRoot([
      {path: '', component: ProductsComponent, canActivate: [AuthGuardService]},
      {path: 'products', component: ProductsComponent, canActivate: [AuthGuardService]},
      {path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuardService]},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},

      // {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService, RouteService]},
      // {path: 'payment-gateway', component: PaymentGatewayComponent, canActivate: [AuthGuardService, RouteService]},
      // {path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService, RouteService]},
      // {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},

     {path: 'admin/products/new', component: ProductFormComponent},
      {path: 'admin/products/:id', component: ProductFormComponent},
      {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService]},
      {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService]},
      {path: 'admin/delivery-person', component: AdminDeliveryPersonComponent, canActivate: [AuthGuardService]},
      // {path: 'admin/categories/new', component: CategoryformComponent, canActivate: [AuthGuardService]},
      // {path: 'admin/categories/:id', component: CategoryformComponent, canActivate: [AuthGuardService]},
      // {path: 'admin/categories', component: AdminCategoriesComponent, canActivate: [AuthGuardService]},
      {path: 'admin/deliveryperson/new', component: DeliveryPersonFormComponent, canActivate: [AuthGuardService]},
      {path: 'admin/deliveryperson/:id', component: DeliveryPersonFormComponent, canActivate: [AuthGuardService]},
      {path: 'admin/deliveryperson', component: AdminDeliveryPersonComponent, canActivate: [AuthGuardService]},
      {path: '**', component: NoRouteComponent, canActivate: [AuthGuardService]}
    ])

  ],
  providers: [
    ProductService,
    AlertifyService,
    AuthService,
    AuthGuardService,
    DeliveryPersonService,
    OrderService,
    PasswordService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
