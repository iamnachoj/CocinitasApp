import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeListComponent} from "./components/recipe-list/recipe-list.component";
import {RecipeComponent} from "./components/recipe-list/recipe/recipe.component";
import {RecipeDetailsComponent} from "./components/recipe-details/recipe-details.component";
import {RecipesComponent} from "./components/recipes.component";
import {RecipeEditComponent} from "./components/recipe-edit/recipe-edit.component";
import {AppRoutingModule} from "../../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {DropdownDirective} from "../../shared/dropdown.directive";
import {recipesRoutingModule} from "./recipes-routing.module";



@NgModule({
  declarations: [
    RecipeListComponent,
    RecipesComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    RecipeEditComponent,
    DropdownDirective,
  ],
  exports: [
    DropdownDirective,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    RouterOutlet,
    RouterLinkWithHref,
    ReactiveFormsModule,
    HttpClientModule,
    recipesRoutingModule,
  ]
})
export class RecipesModule { }
