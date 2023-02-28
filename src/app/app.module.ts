import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShoppingListComponent} from "./components/shopping-list/shopping-list-component";
import {HeaderComponent} from './components/header/header.component';
import {ShoppingListEditComponent} from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptorService} from "./shared/services/auth-interceptor.service";
import {RecipesModule} from "./modules/recipes/recipes.module";
import {AuthModule} from "./modules/auth/auth.module";

@NgModule({
    declarations: [
        AppComponent,
        ShoppingListComponent,
        HeaderComponent,
        ShoppingListEditComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterOutlet,
        RouterLinkWithHref,
        ReactiveFormsModule,
        HttpClientModule,
        RecipesModule,
        AuthModule,
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}] ,
    bootstrap: [AppComponent]
})
export class AppModule {
}
