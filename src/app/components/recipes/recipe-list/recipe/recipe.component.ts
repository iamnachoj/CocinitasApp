import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../../../shared/recipe.model";

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})
export class RecipeComponent  {
    @Input() recipe: Recipe;
    @Output() recipeSelected = new EventEmitter<void>()

    onSelected() {
    this.recipeSelected.emit()
    }
}
