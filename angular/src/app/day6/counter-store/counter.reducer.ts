import { createReducer, on } from '@ngrx/store';

import { decrement, increment, reset } from './counter.actions';

export const COUNTER_STATE_NAME = 'counter';

export interface CounterState {
  counter: number;
}

export const initialCounterState: CounterState = {
  counter: 0
};

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, state => ({
    ...state,
    counter: state.counter + 1
  })),
  on(decrement, state => ({
    ...state,
    counter: state.counter - 1
  })),
  on(reset, () => initialCounterState)
);
