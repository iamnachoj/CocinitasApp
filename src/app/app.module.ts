import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ShoppingListComponent} from "./components/shopping-list/shopping-list-component";
import {RecipeListComponent} from './components/recipes/recipe-list/recipe-list.component';
import {RecipeComponent} from './components/recipes/recipe-list/recipe/recipe.component';
import {HeaderComponent} from './components/header/header.component';
import {ShoppingListEditComponent} from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import {RecipeDetailsComponent} from './components/recipes/recipe-details/recipe-details.component';
import {RecipesComponent} from './components/recipes/recipes.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownDirective} from "./shared/dropdown.directive";
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {RecipeEditComponent} from './components/recipes/recipe-edit/recipe-edit.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthComponent} from "./components/auth/auth.component";
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import {AuthInterceptorService} from "./shared/services/auth-interceptor.service";
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
    declarations: [
        AppComponent,
        ShoppingListComponent,
        RecipeListComponent,
        RecipeComponent,
        HeaderComponent,
        ShoppingListEditComponent,
        RecipeDetailsComponent,
        RecipesComponent,
        DropdownDirective,
        RecipeEditComponent,
        AuthComponent,
        LoadingSpinnerComponent,
        AlertComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        RouterOutlet,
        RouterLinkWithHref,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}] ,
    bootstrap: [AppComponent]
})
export class AppModule {
}
