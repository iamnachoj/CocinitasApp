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
    editMode = false;
    newRecipeForm: FormGroup;

    constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.isEditMode();
        this.initForm();
    }

    private initForm() {
        this.newRecipeForm = new FormGroup({
            "name": new FormControl(null),
            "description": new FormControl(null),
            "imagePath": new FormControl(null),
            "preparationDetails": new FormControl(null),
            "ingredients": new FormArray([])
        });
    }

    private isEditMode() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params["id"];
                    this.editMode = params["id"] != null;
                }
            )
    }

    onNewIngredient() {
        const control = new FormGroup({
            "name": new FormControl(null),
            "amount": new FormControl(null),
        });
        ;
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
