import { Injectable }             from '@angular/core';
import { CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot }    from '@angular/router';
import { AuthService }            from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthService, private router: Router) {}
  login:boolean = false;
  canActivate(
    // Not using but worth knowing about
    next:  ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    this.isLoggedIn();
    if (this.login) { return true; }
    this.router.navigate(['']);
    return false;
  }

  isLoggedIn() {
    this.login = this.authService.isLoggedIn();
    // console.log(`Login ${this.login}`);
  }

}
