import { Component } from '@angular/core';

import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-day3-main',
  standalone: true,
  imports: [PostsComponent],
  templateUrl: './day3-main.component.html',
  styleUrls: ['./day3-main.component.css']
})
export class Day3MainComponent {

}