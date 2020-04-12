import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
import { GithubApiService } from '../services/github-api.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user:User;

  newUser = new User ("","","","","","","");

  @Output()
  searchUser: EventEmitter<string> = new EventEmitter<string>()

  submitUser() {
    this.searchUser.emit(this.newUser.name);
    this.newUser = new User("", "", "", "", "", "","")

  }

  searchUserName(username:string){
    this.apiUsername.userRequest(username);
    this.user = this.apiUsername.user;
  }

  constructor(private http:HttpClient,private apiUsername:GithubApiService) { }

  // doSearch(username:string){
  //   this.apiUsername.search(username)
  // }

  ngOnInit(): void {
    this.searchUserName("TERRYYYY")
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