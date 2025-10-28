import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PostCard } from './post-card/post-card';
import { PostService } from '../../services/post';
import { IPost } from '../../model/post';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, PostCard],
  template: `
    <div class="mx-auto w-7xl h-screen p-4 ">
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add Post
      </button>
      <button
        type="button"
        class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:red-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
      >
        Remove Post
      </button>

      <div class="flex flex-wrap items-center justify-between gap-4 overflow-y-auto">
        <!-- <app-post-card *ngFor="let post of posts" [title]="post.title" [content]="post.content" /> -->

        @for(post of posts | async; track post.id ){
        <app-post-card [title]="post.title" [content]="post.body" />
        } @empty {
        <p>No Post found</p>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class Posts {
  private postService = inject(PostService);
  posts = this.postService.getPost();
}
