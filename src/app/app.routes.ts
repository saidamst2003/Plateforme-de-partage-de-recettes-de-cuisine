import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'detail', // make dynamic links (detail/:recetteId)
        component:RecipeDetailComponent
    },
    {
         path:'list',
         component :RecipeListComponent
    
    },
    
];
