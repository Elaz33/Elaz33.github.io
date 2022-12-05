/*jshint esversion: 6 */
/* global console */
/*jshint esversion:8*/
(async function(){
"use strict";

const recipeSelect= $("#recipeSelect");
const name =$("#name");
const picture =$("#picture");
const ingredients =$("#ingredients");
const noRecipe = $(".noRecipe");

try{
    const response = await fetch("recipe.json");
    if(!response.ok){
        throw new Error(`${response.status}${response.statusText}`);
    }
    const recipes= await response.json();
    recipes.forEach(recipe => {
        recipeSelect
        .append(`<option value="${recipe.id}">${recipe.name}</option>`);
    });
    recipeSelect.change(async function(e){
    console.log(e.target.value);
    
    try{
        const response = await fetch(`${this.value}.json`);
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const recipe = await response.json();
        name.text(recipe.name);
        picture.attr("src" ,recipe.picture);
        

        ingredients.empty();
        recipe.ingredients.forEach(ingredient => {
            ingredients.append(`<li>${ingredient}</li>`);
        });
        noRecipe.show();
    }
    catch(e){
    console.error('oops', e);
    }
});
}catch(e){
    console.error('oops', e);
}
    // async function loadJson(url) {
    //     try {
    //         const response = await fetch(url);
    //         if (!response.ok) {
    //             throw new Error(`${response.status} ${response.statusText}`);
    //         }
    //         const result = await response.json();
    //         return result;
    //     }
    //     catch (e) {
    //         console.error('oops', e);
    //     }
    // }


    // async function loadRecipes() {
    //     const recipes = await loadJson('recipe.json');
    //     recipes.forEach(recipe => {
    //         recipeSelect
    //             .append(`<option value="${recipe.id}">${recipe.name}</option>`);
    //     });

    //     recipeSelect.change(recipeSelected);
    // }

    // async function recipeSelected(e) {
    //     const recipe = await loadJson(`${this.value}.json`);

    //     name.text(recipe.name);
    //     picture.attr('src', recipe.picture);

    //     ingredients.empty();
    //     recipe.ingredients.forEach(ingredient => {
    //         ingredients.append(`<li>${ingredient}</li>`);
    //     });
    //     noRecipe.show();
    // }

    // loadRecipes();
})();