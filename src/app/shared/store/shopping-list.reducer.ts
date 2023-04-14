import {Ingredient} from "../ingredient.model";
import * as shoppingListActions from "./shopping-list.actions";

export interface AppState {
    shoppingList: ShoppingListState
}

export interface ShoppingListState {
    ingredients: Ingredient[],
    editedIngredient: Ingredient,
    editedIngredientIndex: number
}

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
        case shoppingListActions.START_EDIT:
            return {
                ...state,
                editedIngredientIndex: action.payload,
                editedIngredient: {...state.ingredients[action.payload]}
            }
        case shoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredientIndex: -1,
                editedIngredient: null
            }
        default:
            return state
    }
}
