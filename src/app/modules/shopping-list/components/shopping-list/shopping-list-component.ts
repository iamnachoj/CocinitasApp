import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../../../../shared/ingredient.model";
import { ShoppingListService } from "../../../../shared/services/shopping-list.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-components',
  templateUrl: './shopping-list-component.html',
  styleUrls: ['./shopping-list-component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Observable<{ingredients: Ingredient[]}>;

    constructor(
        private shoppingListService : ShoppingListService,
    ) {}

    ngOnInit(){
        this.ingredients = this.shoppingListService.getIngredients()
    }

    onEditItem(index: number) {
        this.shoppingListService.startedEditing.next(index)
    }
}
