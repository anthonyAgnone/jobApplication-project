import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { TopbarComponent } from './topbar/topbar.component';

import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [AppComponent, CategoriesComponent, TopbarComponent],
  imports: [BrowserModule, DragulaModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
