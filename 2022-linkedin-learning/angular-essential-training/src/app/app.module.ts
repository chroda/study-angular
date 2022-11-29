import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';

import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
