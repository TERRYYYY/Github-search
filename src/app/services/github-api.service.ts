import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  user: User;

  // apiRoot: string = 'e26d816eac22b17ab727ee8bd10a66dbebad1e51' ;
  // users : Object[]

  constructor(private http:HttpClient) { 
    this.user = new User("","","","","","","","")
  }

  userRequest(username:string){
    interface ApiResponse{
       avatar_url: any,
       name: string,
       location: string,
       bio: any,
       followers: any,
       following: any,
    }
    let newPromise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + username + environment.apiKey).toPromise().then(response => {
        this.user.avatar_url = response.avatar_url
        this.user.name = response.name
        this.user.location = response.location
        this.user.bio = response.bio
        this.user.followers = response.followers
        this.user.following = response.following

        resolve()

      }, error => {


        reject(error)

      })

    })
    return newPromise

  }
  
  }
  // search(username:string){
  //   let promise = new Promise ((resolve,reject) =>{
  //     let accessToken = `https://api.github.com/users/${username}?access_token=${environment.accessToken}`;
  //     this.http.get(accessToken)
  //     .toPromise()
  //     .then(response =>{
  //       console.log(this.user.name)

  //     })

  //   });
  //   return promise;

  // }






// CANVAS CONTENT
  // githubApiRequest(){
  //   interface ApiResponse {
  //     name: string;
  //     avatar_url: string;
  //     location: string;
  //     bio: string;
  //     followers: number;
  //     following: number;
  //   }
  //   let promise = new Promise((resolve, reject) => {
  //     this.http.get<ApiResponse>(environment.accessToken).toPromise().then(response => {
  //       this.user.name = response.name
  //       this.user.avatar_url = response.avatar_url
  //       this.user.bio = response.bio

  //       resolve()
  //     },
  //       error => {
  //         this.user.name = "Never, never, never give up"
  //         this.user.avatar_url = "Winston Churchill"

  //         reject(error)
  //       })
  //   })
  //   return promise;
  // }


  // search(username:string){
  //   let promise = new Promise ((resolve,reject) =>{
  //     let accessToken = `https://api.github.com/users/${username}?access_token=${environment.accessToken}`;
  //     this.http.get(accessToken)
  //     .toPromise()
  //     .then(response =>{
  //       this.users.name =response.name
  //     })

  //   });
  //   return promise;

  // }

