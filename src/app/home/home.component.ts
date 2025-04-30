import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  recipes: any[] = [];

  http = inject(HttpClient);

  constructor() {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.http.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
      .subscribe((res: any) => {
        // Ajouter des champs factices pour rating et reviews
        this.recipes = res.meals.map((meal: any) => ({
          title: meal.strMeal,
          image: meal.strMealThumb,
          rating: this.getRandomRating(), // Ex : 4.5
          reviews: Math.floor(Math.random() * 500) + 10 // Ex : 37 avis
        }));
      });
  }

  getRandomRating(): number {
    const ratings = [4.2, 4.5, 4.6, 4.8, 4.9];
    return ratings[Math.floor(Math.random() * ratings.length)];
  }

  getFullStars(rating: number): any[] {
    return Array(Math.floor(rating));
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 >= 0.5;
  }

  getEmptyStars(rating: number): any[] {
    return Array(5 - Math.ceil(rating));
  }
}
