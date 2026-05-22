import { createReducer, on } from '@ngrx/store';

import {
  addProduct,
  clearProducts,
  removeProduct,
  toggleProductStock
} from './product.actions';
import { Product } from './product.model';

export const PRODUCTS_STATE_NAME = 'products';

export interface ProductsState {
  products: Product[];
}

export const initialProductsState: ProductsState = {
  products: [
    {
      id: 1,
      name: 'Laptop',
      price: 55000,
      inStock: true
    },
    {
      id: 2,
      name: 'Keyboard',
      price: 1500,
      inStock: false
    }
  ]
};

export const productsReducer = createReducer(
  initialProductsState,
  on(addProduct, (state, action) => ({
    ...state,
    products: [...state.products, action.product]
  })),
  on(removeProduct, (state, action) => ({
    ...state,
    products: state.products.filter(product => product.id !== action.id)
  })),
  on(toggleProductStock, (state, action) => ({
    ...state,
    products: state.products.map(product =>
      product.id === action.id
        ? { ...product, inStock: !product.inStock }
        : product
    )
  })),
  on(clearProducts, state => ({
    ...state,
    products: []
  }))
);
