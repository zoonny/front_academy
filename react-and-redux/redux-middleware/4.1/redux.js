export const actionCreator = type => payload => ({
  type,
  payload,
});

export function createStore(reducer) {
  let state;
  const handlers = [];

  function dispatch(action) {
    state = reducer(state, action);
    handlers.forEach(handler => handler());
  }

  function getState() {
    return state;
  }

  function subscribe(handler) {
    handlers.push(handler);
  }

  const store = {
    getState,
    subscribe,
    dispatch,
  };

  return store;
}
