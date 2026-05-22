import { createAction, props } from '@ngrx/store';

import { Product } from './product.model';

export const addProduct = createAction(
  '[Products] Add Product',
  props<{ product: Product }>()
);

export const removeProduct = createAction(
  '[Products] Remove Product',
  props<{ id: number }>()
);

export const toggleProductStock = createAction(
  '[Products] Toggle Product Stock',
  props<{ id: number }>()
);

export const clearProducts = createAction('[Products] Clear Products');
