import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GithubService {
  private readonly API_ENDPOINT = 'http://api.github.com';
  constructor(private _http: HttpClient) {}

  getUser(username: string): Observable<any> {
    return this._http.get(`${this.API_ENDPOINT}/search/users`, {
      params: new HttpParams().set('q', username),
    });
  }

  getRepos(repos: string): Observable<any> {
    return this._http.get(`${this.API_ENDPOINT}/search/repositories`, {
      params: new HttpParams().set('q', repos),
    });
  }
}
