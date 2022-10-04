import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../shared/recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent  {
  selectedRecipe: Recipe;

  selectRecipe(recipe){
    this.selectedRecipe = recipe
  }
}
