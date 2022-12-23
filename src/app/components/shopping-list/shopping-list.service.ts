import {Injectable} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>()
    startedEditing = new Subject<number>()
    private ingredients: Ingredient[] = [
        new Ingredient('Water', 3),
        new Ingredient('Beer', 6)
    ]
   getIngredients(){
       return this.ingredients.slice();
   }
   insertNewIngredient(ingredient){
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next(this.ingredients.slice());
   }
   insertNewIngredientArray(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.next(this.ingredients.slice());
   }

}
