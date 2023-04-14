import {Injectable} from '@angular/core';
import {Ingredient} from "../ingredient.model";
import {Subject} from "rxjs";
import {Store} from "@ngrx/store";
import * as ShoppingListActions from "../store/shopping-list.actions";
import * as fromShoppingList from "../store/shopping-list.reducer";

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
    constructor(
        private store: Store<fromShoppingList.AppState>
    ){}

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    getIngredients() {
        return this.store.select('shoppingList');
    }

    insertNewIngredientArray(ingredients: Ingredient[]) {
        this.store.dispatch(new ShoppingListActions.addRecipeIngredients(ingredients))
    }

    clearAll() {
        this.ingredients = [];
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
