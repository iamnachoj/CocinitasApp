import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShoppingListComponent} from "./modules/shopping-list/components/shopping-list/shopping-list-component";

const appRoutes: Routes = [
  {path: "", redirectTo: "components", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
