import { Comment } from './comments/comment.modelo';

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  //todo metodo http retorna um observable
  getComents(): Observable<Comment[]>{
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
    ;
  }
}
