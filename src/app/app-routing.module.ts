import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';


const routes: Routes = [
  {path: 'home', component:GithubComponent},
  {path: 'explore', component:RepoSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
