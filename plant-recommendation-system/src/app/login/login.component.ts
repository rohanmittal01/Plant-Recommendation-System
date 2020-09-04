import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  model: any = {};
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  jwtHelper: JwtHelperService;
  constructor(private authService: AuthService, private alertify: AlertifyService, private route: Router) { }

  ngOnInit(){
    if (this.authService.loggedIn){
      this.route.navigate(['/']);
    }
  }

  login(){
    console.log(this.model);
    this.authService.login(this.model).subscribe((next: any) => {
      console.log(next);
      this.alertify.success('Logged in successfully');
      localStorage.setItem('token', next.token);
      window.location.reload();
      this.route.navigate(['/']);
    }, error => {
      console.log(error.error);
      this.alertify.error(error.error);
    });
  }


}
