import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsDetailComponent } from './authors-detail/authors-detail.component';
import { AuthorComponent } from './author/author.component';
import { TwowaysBindingComponent } from './twoways-binding/twoways-binding.component';
import { FormsModule } from '@angular/forms';
import { AChildComponent } from './a-child/a-child.component';
import { AParentComponent } from './a-parent/a-parent.component';
import { NgCPParentComponent } from './ng-cpparent/ng-cpparent.component';
import { NgCPChildComponent } from './ng-cpchild/ng-cpchild.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgTemplateChildComponent } from './ng-template-child/ng-template-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassBindingComponent,
    InputBindingComponent,
    AuthorsComponent,
    AuthorsDetailComponent,
    AuthorComponent,
    TwowaysBindingComponent,
    AChildComponent,
    AParentComponent,
    NgCPParentComponent,
    NgCPChildComponent,
    NgTemplateComponent,
    NgTemplateChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
