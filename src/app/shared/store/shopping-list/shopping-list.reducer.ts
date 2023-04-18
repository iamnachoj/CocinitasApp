import {Ingredient} from "../../ingredient.model";
import * as shoppingListActions from "./shopping-list.actions";

export interface State {
    ingredients: Ingredient[],
    editedIngredient: Ingredient | null,
    editedIngredientIndex: number
}

const initialState : State = {
    ingredients: [
        new Ingredient('Water', 3),
        new Ingredient('Beer', 6)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
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
            const ingredient = state.ingredients[state.editedIngredientIndex]
            const updatedIngredient = {
                ...ingredient,
                ...action.ingredient
            };
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

            return {
                ...state,
                ingredients: updatedIngredients
            }
        case shoppingListActions.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.filter((ig, igIndex) => {
                    return igIndex !== state.editedIngredientIndex
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
        case shoppingListActions.DELETE_ALL_INGREDIENTS:
            return {
                ...state,
                ingredients: [],
                editedIngredientIndex: -1,
                editedIngredient: null
            }
        default:
            return state
    }
}
