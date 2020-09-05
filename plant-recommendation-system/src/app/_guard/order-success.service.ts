import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderSuccessService {

  id;
  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private alertify: AlertifyService, private authService: AuthService, private router: Router) { }

  canActivate(router, state: RouterStateSnapshot){
    console.log('-----------------------');
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    console.log(this.authService.decodedToken._id);
    console.log(this.id);
    // tslint:disable-next-line: triple-equals
    if (this.id == this.authService.decodedToken._id){
      return true;
    }
    this.alertify.error('You shall not pass!');
    // this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    this.router.navigate(['/']);
    return false;
  }
}
