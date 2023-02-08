import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {map, Observable, of} from 'rxjs';
import {AuthService} from "../shared/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthResolver implements Resolve<boolean> {
  constructor(private auth: AuthService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.auth.autoLogin();
    this.auth.autoLogout(30 * 60000)
    return;
  }
}
