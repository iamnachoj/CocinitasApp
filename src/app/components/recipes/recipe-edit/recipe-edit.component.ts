import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
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

    constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) {
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
            "name": new FormControl(this.recipe?.name, Validators.required),
            "description": new FormControl(this.recipe?.description, Validators.required),
            "imagePath": new FormControl(this.recipe?.imagePath, Validators.required),
            "preparationDetails": new FormControl(this.recipe?.preparationDetails, Validators.required),
            "ingredients": new FormArray([])
        });

        if(this.recipe?.ingredients) {
           for(let i = 0; this.recipe.ingredients.length > i; i++ ){
               const control = new FormGroup({
                   "name": new FormControl(this.recipe.ingredients[i]?.name, Validators.required),
                   "amount": new FormControl(this.recipe.ingredients[i]?.amount, Validators.required),
               });
               (<FormArray>this.newRecipeForm.get('ingredients')).push(control);
           }
        }
    }

    onNewIngredient() {
        const control = new FormGroup({
            "name": new FormControl(null, Validators.required),
            "amount": new FormControl(null, Validators.required),
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
        console.log(this.newRecipeForm);
        if(this.editMode){
            this.recipeService.updateRecipe(this.newRecipeForm.value,this.id);
            this.router.navigate(['/recipes/' + this.id]).then();
        } else {
            this.recipeService.addRecipe(this.newRecipeForm.value);
            this.router.navigate(['/recipes']).then();
        }
    }
}
