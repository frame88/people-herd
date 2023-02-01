import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable ({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (
    private auth: AuthService,
    private router: Router
    ) {}

  canActivate(){
    const isAuth = this.auth.isLogged();

    if (!isAuth) {
      localStorage.clear();

      this.router.navigateByUrl('login');
    }
    return isAuth;
  }

}

