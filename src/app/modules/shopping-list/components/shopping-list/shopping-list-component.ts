import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../../../../shared/ingredient.model";
import { ShoppingListService } from "../../../../shared/services/shopping-list.service";
import { Observable } from "rxjs";
import {Store} from "@ngrx/store";
import * as shoppingListActions from '../../../../shared/store/shopping-list.actions';
import * as fromShoppingList from '../../../../shared/store/shopping-list.reducer';

@Component({
  selector: 'app-components',
  templateUrl: './shopping-list-component.html',
  styleUrls: ['./shopping-list-component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Observable<{ingredients: Ingredient[]}>;

    constructor(
        private shoppingListService : ShoppingListService,
        private store : Store<fromShoppingList.AppState>
    ) {}

    ngOnInit(){
        this.ingredients = this.shoppingListService.getIngredients()
    }

    onEditItem(index: number) {
        this.store.dispatch(new shoppingListActions.startEdit(index))
    }
}
