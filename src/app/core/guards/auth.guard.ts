import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable, take} from 'rxjs';
import {AuthService} from "../../shared/services/auth.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../shared/store/app.reducer";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor
  (
      private auth: AuthService,
      private router : Router,
      private store : Store<AppState>
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.store.select('auth').pipe(
          take(1),
          map(authState => {
              return authState.user
          }),
          map( user => {
            if (!user) {
              this.router.navigate(['/auth']);
              return false
            } else {
              return true
            }
          })
      )
    }
}
