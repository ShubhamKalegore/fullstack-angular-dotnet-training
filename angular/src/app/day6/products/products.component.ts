import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import {
  addProduct,
  clearProducts,
  removeProduct,
  toggleProductStock
} from '../product-store/product.actions';
import {
  selectProducts,
  selectProductsCount
} from '../product-store/product.selector';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, FormsModule, NgFor, NgIf],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  private store = inject(Store);

  products$ = this.store.select(selectProducts);
  productsCount$ = this.store.select(selectProductsCount);

  productName = '';
  productPrice = 0;

  addProduct() {
    const name = this.productName.trim();

    if (!name || this.productPrice <= 0) {
      return;
    }

    this.store.dispatch(addProduct({
      product: {
        id: Date.now(),
        name,
        price: this.productPrice,
        inStock: true
      }
    }));

    this.productName = '';
    this.productPrice = 0;
  }

  removeProduct(id: number) {
    this.store.dispatch(removeProduct({ id }));
  }

  toggleStock(id: number) {
    this.store.dispatch(toggleProductStock({ id }));
  }

  clearProducts() {
    this.store.dispatch(clearProducts());
  }
}
