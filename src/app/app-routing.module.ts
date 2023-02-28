import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShoppingListComponent} from "./components/shopping-list/shopping-list-component";

const appRoutes: Routes = [
  {path: "", redirectTo: "shopping-list", pathMatch: 'full'},
  {path: "shopping-list", component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
