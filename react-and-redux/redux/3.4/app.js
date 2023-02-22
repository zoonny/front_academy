import { createStore, actionCreator } from './redux.js';
import { reducer } from './reducer.js';
import * as Actions from './actions.js';

const store = createStore(reducer);

store.subscribe(function() {
  console.log(store.getState());
});

store.dispath(Actions.increase());
store.dispath(Actions.increase());
store.dispath(Actions.increase());
store.dispath(Actions.decrease());
store.dispath(Actions.reset());
