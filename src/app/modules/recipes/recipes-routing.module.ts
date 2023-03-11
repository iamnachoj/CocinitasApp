import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./components/recipes.component";
import {AuthResolver} from "../../core/resolvers/auth.resolver";
import {AuthGuard} from "../../core/guards/auth.guard";
import {RecipeListComponent} from "./components/recipe-list/recipe-list.component";
import {RecipeResolver} from "../../core/resolvers/recipe.resolver";
import {RecipeEditComponent} from "./components/recipe-edit/recipe-edit.component";
import {RecipeDetailsComponent} from "./components/recipe-details/recipe-details.component";

const recipeRoutes: Routes = [
    {
        path: "", component: RecipesComponent, resolve: [AuthResolver], canActivate: [AuthGuard],
        children:
            [
                {path: "", component: RecipeListComponent, resolve: [RecipeResolver]},
                {path: "new", component: RecipeEditComponent},
                {path: ":id", component: RecipeDetailsComponent, resolve: [RecipeResolver]},
                {path: ":id/edit", component: RecipeEditComponent, resolve: [RecipeResolver]}
            ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(recipeRoutes)],
    exports: [RouterModule]
})
export class recipesRoutingModule {

}
