import { Injectable } from '@angular/core';
import {Observable, from } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Repository} from '../classes/repository';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GithubRepoService {
  constructor(private http: HttpClient) { }

  githubRepo(username):Observable<Repository[]>{
    return this.http.get<Repository[]>("https://api.github.com/users/" + username + "/repos" + environment.apiKey)
  }

}
