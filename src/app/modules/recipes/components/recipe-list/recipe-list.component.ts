import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../../../../shared/recipe.model";
import {RecipeService} from "../../../../shared/services/recipe.service";
import {Ingredient} from "../../../../shared/ingredient.model";
import {Subscription} from "rxjs";


@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
    recipes: Recipe[] = []
    recipeSubscription: Subscription
    constructor(private recipeService: RecipeService) {}

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes()
        this.recipeSubscription =  this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => this.recipes = recipes)
    }
    ngOnDestroy() {
        this.recipeSubscription.unsubscribe();
    }
}
