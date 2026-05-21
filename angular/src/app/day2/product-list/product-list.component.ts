import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  showProducts = true;

  products = [
    { name: 'laptop', price: 50000 },
    { name: 'mobile', price: 20000 },
    { name: 'keyboard', price: 1500 }
  ];

  toggleProducts() {
    this.showProducts = !this.showProducts;
  }
}
