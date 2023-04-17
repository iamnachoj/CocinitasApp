import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../../../shared/recipe.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../../../../shared/services/recipe.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../shared/store/shopping-list.reducer";
import * as ShoppingListActions from "../../../../shared/store/shopping-list.actions";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

export class RecipeDetailsComponent implements OnInit {
     recipe: Recipe
     id : number
    constructor(
                 private route: ActivatedRoute,
                 private router: Router,
                 private recipeService : RecipeService,
                 private store : Store<AppState>) {}
    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params.id
                    this.recipe = this.recipeService.getRecipe(this.id)
                }
            );
    }

    addIngredients(ingredients) {
        this.store.dispatch(new ShoppingListActions.addRecipeIngredients(ingredients))
    }

    deleteRecipe() {
        if (confirm('Are you sure you want to remove this recipe?') === true) {
            this.recipeService.deleteRecipe(this.id)
            this.router.navigate(['/recipes']).then();
        }
    }
}
