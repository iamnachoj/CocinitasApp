import {Action} from "@ngrx/store";
import {Ingredient} from "../ingredient.model";

export const ADD_NEW_INGREDIENT = 'ADD_NEW_INGREDIENT';
export const ADD_RECIPE_INGREDIENTS = 'ADD_RECIPE_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const DELETE_ALL_INGREDIENTS = 'DELETE_ALL_INGREDIENTS';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class addNewIngredient implements Action {
   readonly type = ADD_NEW_INGREDIENT;
   constructor(public payload: Ingredient) {}
}

export class addRecipeIngredients implements Action {
   readonly type = ADD_RECIPE_INGREDIENTS;
   constructor(public ingredients: Ingredient[]) {}
}

export class updateIngredient implements Action {
   readonly type = UPDATE_INGREDIENT;
   constructor(public ingredient: Ingredient) {}
}

export class deleteIngredient implements Action {
   readonly type = DELETE_INGREDIENT;
   constructor() {}
}

export class deleteAllIngredients implements Action {
   readonly type = DELETE_ALL_INGREDIENTS;
   constructor() {}
}

export class startEdit implements Action {
   readonly type = START_EDIT;
   constructor(public payload: number) {}
}

export class stopEdit implements Action {
   readonly type = STOP_EDIT;
   constructor() {}
}

export type ShoppingListActions =
    addNewIngredient
    | addRecipeIngredients
    | updateIngredient
    | deleteIngredient
    | startEdit
    | stopEdit
    | deleteAllIngredients
