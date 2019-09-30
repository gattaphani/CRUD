import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Users } from 'src/app/feature/users';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  get_posts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getPost(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts'+ '/' + id);
  }
getPostByParameter(){
  let params1 = new HttpParams().set("userId","1");
  return this.http.get('https://jsonplaceholder.typicode.com/posts', {params:params1});
}


  url: any = 'http://localhost:3000/';
  getAll(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url);
  }

  getAllById(id: number): Observable<Users[]> {
    return this.http.get<Users[]>(this.url + '/' + id);
  }

  createAll(users: Users): Observable<Users[]> {
    return this.http.post<Users[]>(this.url, users);
  }

  updateAll(id: number, users: any): Observable<Users[]> {
    return this.http.put<Users[]>(this.url + '/' + users.id, users);
  }

  deleteAll(id: number): Observable<Users[]> {
    return this.http.delete<Users[]>(this.url + id);
  }
}
//////////////////////////////////////////////////////////////////
