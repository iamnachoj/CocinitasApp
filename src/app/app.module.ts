import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/components/header/header.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptorService} from "./shared/services/auth-interceptor.service";
import {RecipesModule} from "./modules/recipes/recipes.module";
import {AuthModule} from "./modules/auth/auth.module";
import {ShoppingListModule} from "./modules/shopping-list/shopping-list.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterOutlet,
        RouterLinkWithHref,
        ReactiveFormsModule,
        HttpClientModule,
        RecipesModule,
        AuthModule,
        ShoppingListModule,
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}] ,
    bootstrap: [AppComponent]
})
export class AppModule {
}
