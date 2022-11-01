import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Injectable({
    providedIn: 'root'
})

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>()

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 3),
        new Ingredient('Tomatoes', 5)
    ]
   getIngredients(){
       return this.ingredients.slice();
   }
   insertNewIngredient(ingredient){
        this.ingredients.push(ingredient)
        this.ingredientsChanged.emit(this.ingredients.slice());
   }

}
