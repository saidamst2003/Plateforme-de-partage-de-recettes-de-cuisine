import { Component, inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,  
  imports: [HttpClientModule, CommonModule], 
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  CardList: any[] = [];
  
  http = inject(HttpClient);
  router = inject(Router);

  getAllRecipes() {
    this.http.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
      .subscribe((res: any) => {
        this.CardList = res.meals;  
      });
  }

  viewRecipeDetails(id: string) {
    this.router.navigate(['/detail', id]);
  }

  constructor() {
    this.getAllRecipes(); 
  }
}