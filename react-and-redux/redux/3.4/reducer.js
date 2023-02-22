import * as ActionType from './action-type.js';

const InitializeState = { count: 0 };

export function reducer(state = InitializeState , action) {
  // do something
  switch(action.type) {
    case ActionType.INCREASE:
      return { ...state, count: state.count + 1 };
    case ActionType.DECREASE:
      return { ...state, count: state.count - 1 };
    case ActionType.RESET:
      return { ...state, count: 0 };
    default: 
      return { ...state };
  }
}
