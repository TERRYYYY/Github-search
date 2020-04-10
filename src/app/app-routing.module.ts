import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import {NotFoundComponent} from './not-found/not-found.component'


const routes: Routes = [
  {path: 'user', component:GithubComponent},
  {path: 'repo', component:RepoSearchComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
