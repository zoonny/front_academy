export const actionCreator = type => payload => ({
  type,
  payload,
});

export function createStore(reducer) {
  let state;
  let handlers = [];

  function dispath(action) {
    state = reducer(state, action);
    handlers.forEach(handler => handler());
  }

  function subscribe(handler) {
    handlers.push(handler);
  }

  function getState() {
    return state;
  }

  return {
    dispath,
    getState,
    subscribe,
  };
}
