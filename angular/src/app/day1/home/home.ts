import { Component } from '@angular/core';
import { HighlightDirective } from '../../shared/directives/highlight';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  buttonClick() {
    alert("Button Clicked!");
  }
}
