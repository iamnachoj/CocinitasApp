import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipesComponent} from "./components/recipes/recipes.component";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list-component";
import {RecipeDetailsComponent} from "./components/recipes/recipe-details/recipe-details.component";
import {RecipeListComponent} from "./components/recipes/recipe-list/recipe-list.component";
import {RecipeEditComponent} from "./components/recipes/recipe-edit/recipe-edit.component";
import {RecipeResolver} from "./resolvers/recipe.resolver";
import {AuthComponent} from "./components/auth/auth.component";
import {AuthResolver} from "./resolvers/auth.resolver";
import {AuthGuard} from "./guards/auth.guard";

const appRoutes: Routes = [
  {path: "", redirectTo: "recipes", pathMatch: 'full'},
  {path: "recipes", component: RecipesComponent, resolve: [AuthResolver], canActivate: [AuthGuard], children: [
      {path: "", component: RecipeListComponent, resolve: [RecipeResolver]},
      {path: "new", component: RecipeEditComponent},
      {path: ":id", component: RecipeDetailsComponent, resolve: [RecipeResolver]},
      {path: ":id/edit", component: RecipeEditComponent,resolve: [RecipeResolver] }
    ]},
  {path: "shopping-list", component: ShoppingListComponent},
  {path: "auth", component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
