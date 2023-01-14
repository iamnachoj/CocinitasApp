import {Injectable} from "@angular/core";
import {Recipe} from "../recipe.model";
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
 })

export class RecipeService {
    private recipes: Recipe[] = [];
    recipesChanged = new Subject<Recipe[]>();

    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index) {
        return this.recipes.slice()[index]
    }
    addRecipe(recipe){
        this.recipes.push(recipe);
        return this.recipes.slice();
    }
    updateRecipe(updatedRecipe, indexOfUpdatedRecipe) {
        this.recipes[indexOfUpdatedRecipe] = {
            ...this.recipes[indexOfUpdatedRecipe],
            ...updatedRecipe
        };
    }
    deleteRecipe(index){
        this.recipes.splice(index, 1);
    }
    setRecipes(recipes : Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice())
    }
}
