import { createStore } from './redux.js';
import { reducer } from './reducer.js';
import * as Actions from './actions.js';

const store = createStore(reducer);

store.subscribe(function() {
  console.log('sub => ', store.getState());
});

store.dispath(Actions.increase());
console.log('dis => ', store.getState());
store.dispath(Actions.increase());
console.log('dis => ', store.getState());
store.dispath(Actions.increase());
console.log('dis => ', store.getState());
store.dispath(Actions.decrease());
console.log('dis => ', store.getState());
store.dispath(Actions.reset());
console.log('dis => ', store.getState());
