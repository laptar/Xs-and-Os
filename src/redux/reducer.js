import { initialState } from './initial-state';
import { createReducer } from '@reduxjs/toolkit';

import {
  addNameXAction,
  addNameOAction,
  addWinXAction,
  addWinOAction,
  resetPlayerOneAction,
  resetPlayerTwoAction,
  changeWinnerAction,
  resetWinnerAction,
  addNewStepAction,
  resetFieldAction,
} from './actions';

const playerOneReducer = createReducer(initialState.playerOne, {
  [addNameXAction]: (state, action) => ({
    ...state,
    playerName: action.payload,
  }),
  [addWinXAction]: state => ({
    ...state,
    playerScore: state.playerScore + 1,
  }),
  [resetPlayerOneAction]: () => initialState.playerOne,
});

const playerTwoReducer = createReducer(initialState.playerTwo, {
  [addNameOAction]: (state, action) => ({
    ...state,
    playerName: action.payload,
  }),
  [addWinOAction]: state => ({
    ...state,
    playerScore: state.playerScore + 1,
  }),
  [resetPlayerTwoAction]: () => initialState.playerTwo,
});

const winnerReducer = createReducer(initialState.winner, {
  [changeWinnerAction]: (_, action) => action.payload,
  [resetWinnerAction]: () => '',
});

const fieldReducer = createReducer(initialState.field, {
  [addNewStepAction]: (state, action) => {
    const arr = [...state];
    arr[action.payload.index] = action.payload.symbol;
    return arr;
  },
  [resetFieldAction]: () => [...initialState.field],
});

export const reducer = {
  playerOne: playerOneReducer,
  playerTwo: playerTwoReducer,
  winner: winnerReducer,
  field: fieldReducer,
};
