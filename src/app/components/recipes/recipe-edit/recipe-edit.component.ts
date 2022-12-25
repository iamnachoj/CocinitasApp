import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    id: number;
    recipe
    editMode = false;
    newRecipeForm: FormGroup;

    constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.isEditMode();
    }

    private isEditMode() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params["id"];
                    this.editMode = params["id"] != null;
                    this.initForm();
                }
            )
    }

    private initForm() {
        if(this.editMode){
            this.recipe = this.recipeService.getRecipe(this.id)
        }
        this.newRecipeForm = new FormGroup({
            "name": new FormControl(this.recipe?.name),
            "description": new FormControl(this.recipe?.description),
            "imagePath": new FormControl(this.recipe?.imagePath),
            "preparationDetails": new FormControl(this.recipe?.preparationDetails),
            "ingredients": new FormArray([])
        });

        if(this.recipe.ingredients) {
           for(let i = 0; this.recipe.ingredients.length > i; i++ ){
               const control = new FormGroup({
                   "name": new FormControl(this.recipe.ingredients[i]?.name),
                   "amount": new FormControl(this.recipe.ingredients[i]?.amount),
               });
               (<FormArray>this.newRecipeForm.get('ingredients')).push(control);
           }
        }
    }

    onNewIngredient() {
        const control = new FormGroup({
            "name": new FormControl(null),
            "amount": new FormControl(null),
        });
        (<FormArray>this.newRecipeForm.get('ingredients')).push(control);
    }

    removeControl(i) {
        (<FormArray>this.newRecipeForm.get('ingredients')).removeAt(i);
    }

    getControls() {
        return (<FormArray>this.newRecipeForm.get('ingredients')).controls;
    }

    onSubmit() {
        console.log(this.newRecipeForm.value);
        this.recipeService.addRecipe(this.newRecipeForm.value);
    }
}
