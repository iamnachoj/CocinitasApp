import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from "../recipes/components/auth/auth.component";
import {LoadingSpinnerComponent} from "../../shared/loading-spinner/loading-spinner.component";
import {AlertComponent} from "../../core/components/alert/alert.component";
import {FormsModule} from "@angular/forms";
import {AuthRoutingModule} from "./auth-routing.module";



@NgModule({
  declarations: [
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
  ],
  exports: [
    LoadingSpinnerComponent,
    AuthRoutingModule
  ],
  imports: [
    FormsModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
