import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];

  errorMessage = '';

  constructor(private postService: PostService) {}

  ngOnInit(): void {

    this.postService.getPosts().subscribe({

      next: (data) => {

        this.posts = data.slice(0, 10);

      },

      error: () => {

        this.errorMessage = 'Failed to load posts';

      }

    });
  }
}