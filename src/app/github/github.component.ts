import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
import { GithubApiService } from '../services/github-api.service';
import {Repository} from '../classes/repository';
import { GithubRepoService } from '../services/github-repo.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user:User;
  repo: Repository[]
  myRepos: Repository[]
  showRepos: boolean = false;

  searchRepo(username) {
    this.apiRepo.githubRepo(username).subscribe(data => {
      this.myRepos = data

    })
  }

  toggleRepository() {
    this.showRepos = !this.showRepos
  }


  newUser = new User ("","","","","","","","");

  @Output()
  searchUser: EventEmitter<string> = new EventEmitter<string>()

  submitUser() {
    this.searchUser.emit(this.newUser.name);
    this.newUser = new User("", "","", "", "", "", "","")

  }

  searchUserName(username:string){
    this.apiUsername.userRequest(username);
    this.user = this.apiUsername.user;
    this.apiRepo.githubRepo(username).subscribe(data => {
      this.repo = data

    })
  }

  constructor(private http:HttpClient,private apiUsername:GithubApiService,private apiRepo:GithubRepoService) { }

  // doSearch(username:string){
  //   this.apiUsername.search(username)
  // }

  ngOnInit(): void {
    this.searchUserName("terryyyy")
  }

    // this.apiUsername.githubApiRequest()
    // this.user = this.apiUsername.user
}

//     interface ApiResponse{
//     name: string;
//     avatar_url: string;
//     location: string;
//     bio: string;
//     followers: number;
//     following: number;
//     }
//     this.http.get<ApiResponse>("e26d816eac22b17ab727ee8bd10a66dbebad1e51").subscribe(data=>{
//       this.user =new User (data.name,data.avatar_url,data.bio,data.location,data.followers,data.following)
//     })
//   }
// }