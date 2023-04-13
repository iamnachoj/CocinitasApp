import {Ingredient} from "../ingredient.model";
import * as shoppingListActions from "./shopping-list.actions";

const initialState = {
    ingredients: [
        new Ingredient('Water', 3),
        new Ingredient('Beer', 6)
    ]
}

export function shoppingListReducer(
    state = initialState,
    action: shoppingListActions.ShoppingListActions)
{
    switch(action.type){
        case shoppingListActions.ADD_NEW_INGREDIENT:
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    action.payload
                ]
            }
        case shoppingListActions.ADD_RECIPE_INGREDIENTS:
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    ...action.ingredients,
                ]
            }
        case shoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[action.payload.index]
            const updatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            };
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[action.payload.index] = updatedIngredient;

            return {
                ...state,
                ingredients: updatedIngredients
            }
        case shoppingListActions.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.filter((ig, igIndex) => {
                    return igIndex !== action.payload.index
                })
            }
        default:
            return state
    }
}
