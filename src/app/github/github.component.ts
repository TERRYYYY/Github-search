import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { User } from '../classes/user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user:User;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    interface ApiResponse{
      name: string;
    avatar_url: string;
    location: string;
    bio: string;
    followers: number;
    following: number;
    }
    this.http.get<ApiResponse>("e26d816eac22b17ab727ee8bd10a66dbebad1e51").subscribe(data=>{
      this.user =new User (data.name,data.avatar_url,data.bio,data.location,data.followers,data.following)
    })

}
}
