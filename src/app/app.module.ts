import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsDetailComponent } from './authors-detail/authors-detail.component';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassBindingComponent,
    InputBindingComponent,
    AuthorsComponent,
    AuthorsDetailComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
