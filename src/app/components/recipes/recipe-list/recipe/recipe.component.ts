import {Component, Input} from '@angular/core';
import {Recipe} from "../../../../shared/recipe.model";
import {RecipeService} from "../../recipe.service";

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})
export class RecipeComponent  {
    @Input() recipe: Recipe;
    constructor(private recipeService: RecipeService) {
    }
    onSelected() {
     this.recipeService.recipeSelected.emit(this.recipe)
    }
}
