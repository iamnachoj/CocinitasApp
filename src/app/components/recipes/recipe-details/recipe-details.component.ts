import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../../shared/recipe.model";
import {ShoppingListService} from "../../../shared/services/shopping-list.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../../../shared/services/recipe.service";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

export class RecipeDetailsComponent implements OnInit {
     recipe: Recipe
     id : number
    constructor(private shoppingListRecipe : ShoppingListService,
                 private route: ActivatedRoute,
                 private router: Router,
                 private recipeService : RecipeService) {}
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
     this.shoppingListRecipe.insertNewIngredientArray(ingredients)
    }

    deleteRecipe() {
        if (confirm('Are you sure you want to remove this recipe?') === true) {
            this.recipeService.deleteRecipe(this.id)
            this.router.navigate(['/recipes']).then();
        }
    }
}
