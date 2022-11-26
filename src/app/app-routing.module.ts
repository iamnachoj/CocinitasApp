import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipesComponent} from "./components/recipes/recipes.component";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list-component";
import {RecipeDetailsComponent} from "./components/recipes/recipe-details/recipe-details.component";
import {RecipeListComponent} from "./components/recipes/recipe-list/recipe-list.component";
import {RecipeEditComponent} from "./components/recipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
  {path: "", redirectTo: "recipes", pathMatch: 'full'},
  {path: "recipes", component: RecipesComponent, children: [
      {path: "", component: RecipeListComponent},
      {path: "new", component: RecipeEditComponent},
      {path: ":id", component: RecipeDetailsComponent},
      {path: ":id/edit", component: RecipeEditComponent}
    ]},
  {path: "shopping-list", component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
