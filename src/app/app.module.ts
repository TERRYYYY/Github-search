import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    NavbarComponent,
    RepoSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
