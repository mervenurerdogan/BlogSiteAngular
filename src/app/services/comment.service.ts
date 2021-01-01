import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Comment } from '../models/comment';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  private apiUrl: string = `${environment.baseUrl}/comments`;
  loading!: boolean;
  public addComment(comment: Comment) {
    this.loading = true;
    return this.httpClient.post(`${this.apiUrl}`, comment).pipe(
      tap(x => {
        this.loading = false;
      })
    );
  }

 public commentList(id: number) {
    return this.httpClient.get<Comment[]>(`${this.apiUrl}/${id}`);
  }

  public getCommentList(){
    return this.httpClient.get<Comment[]>(this.apiUrl);
  }

  commentDelete(id:number){
    return this.httpClient.delete(`${this.apiUrl}/${id}`)

  }
}


