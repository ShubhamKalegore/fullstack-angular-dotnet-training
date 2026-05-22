import { createFeatureSelector, createSelector } from '@ngrx/store';

import { COUNTER_STATE_NAME, CounterState } from './counter.reducer';

export const selectCounterState = createFeatureSelector<CounterState>(COUNTER_STATE_NAME);

export const selectCounter = createSelector(
  selectCounterState,
  state => state.counter
);
