import { Component, Input } from '@angular/core';
import {Recipe} from "../../../shared/recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
 @Input() recipe: Recipe;
 constructor(private shoppingListRecipe : ShoppingListService) {}

 addIngredients(ingredients) {
     this.shoppingListRecipe.insertNewIngredientArray(ingredients)
 }

}
