import {Component, Input} from '@angular/core';
import {Recipe} from "../../../../../shared/recipe.model";

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})
export class RecipeComponent  {
    @Input() recipe: Recipe;
    @Input() index : number;
    constructor() {}
}
