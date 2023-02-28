import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingListComponent} from "./components/shopping-list/shopping-list-component";
import {ShoppingListEditComponent} from "./components/shopping-list-edit/shopping-list-edit.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class ShoppingListModule {}
