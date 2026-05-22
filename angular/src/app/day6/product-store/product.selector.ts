import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PRODUCTS_STATE_NAME, ProductsState } from './product.reducer';

export const selectProductsState =
  createFeatureSelector<ProductsState>(PRODUCTS_STATE_NAME);

export const selectProducts = createSelector(
  selectProductsState,
  state => state.products
);

export const selectProductsCount = createSelector(
  selectProducts,
  products => products.length
);

export const selectInStockProducts = createSelector(
  selectProducts,
  products => products.filter(product => product.inStock)
);
