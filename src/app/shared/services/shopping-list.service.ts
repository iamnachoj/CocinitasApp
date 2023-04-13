import {Injectable} from '@angular/core';
import {Ingredient} from "../ingredient.model";
import {Subject} from "rxjs";
import {Store} from "@ngrx/store";
import * as ShoppingListActions from "../store/shopping-list.actions";

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
        private store: Store<{shoppingList: {ingredients: Ingredient[]}}>
    ){}

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    getIngredients() {
        return this.store.select('shoppingList');
    }

    insertNewIngredient(ingredient) {
        this.store.dispatch(new ShoppingListActions.addNewIngredient(ingredient))
    }

    insertNewIngredientArray(ingredients: Ingredient[]) {
        this.store.dispatch(new ShoppingListActions.addRecipeIngredients(ingredients))
    }

    updateIngredient(index: number, ingredient: Ingredient) {
        this.store.dispatch(new ShoppingListActions.updateIngredient({index, ingredient}))
    }

    deleteIngredient(index: number) {
        this.store.dispatch(new ShoppingListActions.deleteIngredient({index}));
    }

    clearAll() {
        this.ingredients = [];
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
