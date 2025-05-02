import { Component, inject, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';  

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'] 
})
export class RecipeDetailComponent implements OnInit {
[x: string]: any;
  recipeDetails: any = null;
  loading: boolean = true;
  error: string | null = null;
  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.getRecipeDetails(id);
      }
    });
  }
  
  getRecipeDetails(id: string) {
    this.loading = true;
    this.http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .subscribe({
        next: (res: any) => {
          if (res.meals && res.meals.length > 0) {
            this.recipeDetails = res.meals[0];
            this.loading = false;
          } else {
            this.error = 'Recipe not found';
            this.loading = false;
          }
        },
        error: (err) => {
          this.error = 'Failed to load recipe details';
          this.loading = false;
          console.error(err);
        }
      });
  }

  // Helper method to get all ingredients as an array of objects
  getIngredients() {
    if (!this.recipeDetails) return [];
    
    const ingredients = [];
    
    for (let i = 1; i <= 20; i++) {
      const ingredient = this.recipeDetails[`strIngredient${i}`];
      const measure = this.recipeDetails[`strMeasure${i}`];
      
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({
          name: ingredient,
          measure: measure
        });
      }
    }
    
    return ingredients;
  }
}

