import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Recipe} from "../recipe.model";
import {RecipeService} from "./recipe.service";
import {exhaustMap, map, take, tap} from "rxjs";
import {AuthService} from "./auth.service";
import {User} from "../user.model";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {
    }

    saveRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://cocinitasapp-51803-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes)
            .subscribe(response => {
                console.log(response)
            })

    }

    fetchRecipes() {
       return this.authService.user.pipe(
            take(1),
        exhaustMap((user: User) => {
            return this.http.get<Recipe[]>('https://cocinitasapp-51803-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
                {
                    params: new HttpParams().set('auth', user.token)
                })
        }),
        map(storeRecipes => {
                if (!storeRecipes) {
                    return []
                }
                return storeRecipes
            }
        ),
        tap((recipes : Recipe[]) => {
            this.recipeService.setRecipes(recipes)
        }))
           .subscribe()
    }
}
