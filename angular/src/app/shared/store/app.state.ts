import { ActionReducerMap } from '@ngrx/store';

import {
  COUNTER_STATE_NAME,
  CounterState,
  counterReducer
} from '../../day6/counter-store/counter.reducer';
import {
  PRODUCTS_STATE_NAME,
  ProductsState,
  productsReducer
} from '../../day6/product-store/product.reducer';

export interface AppState {
  [COUNTER_STATE_NAME]: CounterState;
  [PRODUCTS_STATE_NAME]: ProductsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  [COUNTER_STATE_NAME]: counterReducer,
  [PRODUCTS_STATE_NAME]: productsReducer
};
