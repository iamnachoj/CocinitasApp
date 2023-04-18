import * as fromShoppingList from "./shopping-list/shopping-list.reducer";
import * as fromAuth from "./auth/auth.reducer";
import {ActionReducerMap} from "@ngrx/store";

export interface AppState {
    shoppingList: fromShoppingList.State,
    auth: fromAuth.State
}

export const ReducerMap : ActionReducerMap<AppState> = {
    shoppingList: fromShoppingList.shoppingListReducer,
    auth: fromAuth.authReducer
}
