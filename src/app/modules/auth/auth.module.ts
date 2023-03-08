import {NgModule} from '@angular/core';
import {AuthComponent} from "../recipes/components/auth/auth.component";
import {LoadingSpinnerComponent} from "../../shared/loading-spinner/loading-spinner.component";
import {AlertComponent} from "../../core/components/alert/alert.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
  ],
  exports: [
    LoadingSpinnerComponent,
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
