import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from "../../../shared/services/dataStorage.service";
import {AuthService} from "../../../shared/services/auth.service";
import {map, Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../shared/store/app.reducer";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  isLogged : boolean = false
  userSub: Subscription;
  constructor
  (
      private dataStorageService : DataStorageService,
      private auth: AuthService,
      private store : Store<AppState>
  ) {
  }

  ngOnInit() {
   this.userSub = this.store.select('auth')
       .pipe(
           map(authState => {
             return authState.user
           })
       ).subscribe(user => {
      this.isLogged = !!user ;
    });
  }

  saveData() {
    if (confirm("Are you sure you want to save your recipes?")) {
      this.dataStorageService.saveRecipes();
    }
  }

  fetchData() {
    this.dataStorageService.fetchRecipes();
  }

  ngOnDestroy() {
  this.userSub.unsubscribe()
  }

  onLogout() {
      this.auth.logout();
  }
}
