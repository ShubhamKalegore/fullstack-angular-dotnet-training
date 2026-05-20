import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-day2-main',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './day2-main.component.html',
  styleUrl: './day2-main.component.css'
})
export class Day2MainComponent {

}
