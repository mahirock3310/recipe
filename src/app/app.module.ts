import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'; 
import { headerComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-item/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes/recipes-item/recipes-item.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingListEditComponent } from './shoping-list/shoping-list-edit/shoping-list-edit.component';



@NgModule({
  declarations: [
    headerComponent,
    AppComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipesDetailsComponent,
    ShopingListComponent,
    ShopingListEditComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
