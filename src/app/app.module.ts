import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ShoppingListComponent} from "./components/shopping-list/shopping-list-component";
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeComponent } from './components/recipes/recipe-list/recipe/recipe.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeDetailsComponent } from './components/recipes/recipe-details/recipe-details.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeComponent,
    HeaderComponent,
    ShoppingListEditComponent,
    RecipeDetailsComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
