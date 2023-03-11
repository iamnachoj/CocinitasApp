import {NgModule} from '@angular/core';
import {RecipeListComponent} from "./components/recipe-list/recipe-list.component";
import {RecipeComponent} from "./components/recipe-list/recipe/recipe.component";
import {RecipeDetailsComponent} from "./components/recipe-details/recipe-details.component";
import {RecipesComponent} from "./components/recipes.component";
import {RecipeEditComponent} from "./components/recipe-edit/recipe-edit.component";
import {AppRoutingModule} from "../../app-routing.module";
import {DropdownDirective} from "../../shared/dropdown.directive";
import {recipesRoutingModule} from "./recipes-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {CoreModule} from "../../core/core.module";


@NgModule({
  declarations: [
    RecipeListComponent,
    RecipesComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    RecipeEditComponent,
  ],
  imports: [
    SharedModule,
    CoreModule,
    recipesRoutingModule,
  ]
})
export class RecipesModule { }
