import { ActionReducer, Action } from '@ngrx/store';

export function createReducer(initialState, handlers) {
  const defaultHandler = state => state;

  return (state = initialState, action: Action) => {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return (handlers[action.type] || handlers.default || defaultHandler)(state, action.payload);
    }

    return state;
  };
}