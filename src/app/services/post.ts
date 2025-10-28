import { inject, Injectable } from '@angular/core';
import { IPost } from '../model/post';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;

  getPost() {
    return this.http.get<IPost[]>(`${this.apiUrl}/posts`);
  }
}
