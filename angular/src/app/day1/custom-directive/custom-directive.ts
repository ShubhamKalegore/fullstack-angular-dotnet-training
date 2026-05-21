import { Component } from '@angular/core';
import { HighlightDirective } from '../../shared/directives/highlight';

@Component({
  selector: 'app-custom-directive',
  imports: [HighlightDirective],
  templateUrl: './custom-directive.html',
  styleUrl: './custom-directive.css',
  standalone: true
})
export class CustomDirective {}
