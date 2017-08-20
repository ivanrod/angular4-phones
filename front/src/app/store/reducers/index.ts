import { ActionReducer, Action } from '@ngrx/store';

import { createReducer } from './utils';

export interface Phone {
  id: string;
  name: string;
  description: string;
  color: string;
  price: number;
};

export interface State {
  ids: string[];
  entities: { [id: string]: Phone };
};

export const INIT_STATE: State = {
  ids: ['1', '2'],
  entities: {},
};

export const ADD_PHONE = 'ADD_PHONE';

export default createReducer(INIT_STATE, {

  [ADD_PHONE](state, payload) {
    return {
      ...state,
    };
  },

});