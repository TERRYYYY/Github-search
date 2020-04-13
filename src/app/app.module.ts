import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubApiService } from './services/github-api.service';
import { UserSearchComponent } from './user-search/user-search.component';
import { from } from 'rxjs';
import { DateCountPipe } from './date-count.pipe';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { RepoHoverDirective } from './repo-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    NavbarComponent,
    RepoSearchComponent,
    NotFoundComponent,
    UserSearchComponent,
    DateCountPipe,
    RepoHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
