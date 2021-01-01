import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  canActivate(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | import("rxjs").Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    let email =  localStorage.getItem('email') !;
    let password = localStorage.getItem('password')!;

    return this.authService.isAuthendicated(email, password).pipe(
      map(x => {
        if (x.status == true) {
          return true;
        } else {
          this.router.navigate(["/adminlogin"]);
          return false;
        }
      })
    );
  }

  constructor(private authService: AuthService, private router: Router) {}
}
