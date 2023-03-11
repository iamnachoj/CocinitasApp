import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: "", redirectTo: "shopping-list", pathMatch: 'full'},
  {
    path: "recipes", loadChildren: () => import('./modules/recipes/recipes.module').then(m => m.RecipesModule)
  },
  {
    path: "auth", loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "shopping-list", loadChildren: () => import('./modules/shopping-list/shopping-list.module')
        .then(m => m.ShoppingListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
