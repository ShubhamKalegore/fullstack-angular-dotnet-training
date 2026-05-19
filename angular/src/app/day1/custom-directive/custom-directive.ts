import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight';

@Component({
  selector: 'app-custom-directive',
  imports: [HighlightDirective],
  templateUrl: './custom-directive.html',
  styleUrl: './custom-directive.css',
})
export class CustomDirective {}
