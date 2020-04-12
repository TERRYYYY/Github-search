import { Component, OnInit } from '@angular/core';
import {Repository} from '../classes/repository';
import { GithubRepoService} from '../services/github-repo.service';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {
  myRepos: Repository[]

  constructor(private apiRepo:GithubRepoService) { }

  searchRepo(userlogin) {
    this.apiRepo.githubRepo(userlogin).subscribe(data => {
      this.myRepos = data

    })
  }

  ngOnInit(): void {
  }

}
