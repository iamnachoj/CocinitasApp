import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/components/header/header.component';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptorService} from "./shared/services/auth-interceptor.service";
import {CoreModule} from "./core/core.module";

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
        CoreModule
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}] ,
    bootstrap: [AppComponent]
})
export class AppModule {
}
