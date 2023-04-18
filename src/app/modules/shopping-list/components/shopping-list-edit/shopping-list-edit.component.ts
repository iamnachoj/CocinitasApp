import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {Ingredient} from "../../../../shared/ingredient.model";
import {NgForm} from "@angular/forms";
import {Store} from "@ngrx/store";
import * as ShoppingListActions from '../../../../shared/store/shopping-list/shopping-list.actions';
import {AppState} from "../../../../shared/store/app.reducer";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) shoppingListForm: NgForm;
  subscription: Subscription
  editMode = false;
  editedItem: Ingredient;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe(stateData => {
      if(stateData.editedIngredientIndex > -1){
        this.editMode = true;
        this.editedItem = stateData.editedIngredient;
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      } else {
        this.editMode = false;
      }
    });
  }
  onSubmit(form){
    const ingredient = {
      name: form.value.name,
      amount: form.value.amount
    }
      if(this.editMode){
        this.store.dispatch(new ShoppingListActions
            .updateIngredient(ingredient));
      } else {
        this.store.dispatch(new ShoppingListActions.addNewIngredient(ingredient));
      }
    this.store.dispatch(new ShoppingListActions.stopEdit());
    form.reset();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onClear() {
    if (confirm('Are you sure you want to remove all the products from the shopping list?') === true){
      this.store.dispatch(new ShoppingListActions.deleteAllIngredients());
      this.shoppingListForm.reset();
      this.store.dispatch(new ShoppingListActions.stopEdit());
    }
  }
  onDelete(){
    this.store.dispatch(new ShoppingListActions.deleteIngredient());
    this.shoppingListForm.reset();
    this.store.dispatch(new ShoppingListActions.stopEdit());
  }
}
