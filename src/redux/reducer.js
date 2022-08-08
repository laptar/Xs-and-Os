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
  changePlayerXAction,
  changePlayerOAction,
  nextStepAction,
  resetStepAction,
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
  [changePlayerXAction]: (_, action) => ({
    ...action.payload,
    playerSymbol: 'X',
  }),
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
  [changePlayerOAction]: (_, action) => ({
    ...action.payload,
    playerSymbol: 'O',
  }),
});

const winnerReducer = createReducer(initialState.winner, {
  [changeWinnerAction]: (_, action) => action.payload,
  [resetWinnerAction]: () => '',
});

const fieldReducer = createReducer(initialState.field, {
  [addNewStepAction]: (_, action) => [...action.payload],

  [resetFieldAction]: () => [...initialState.field],
});

const stepReducer = createReducer(initialState.step, {
  [nextStepAction]: state => state + 1,

  [resetStepAction]: () => initialState.step,
});

export const reducer = {
  playerOne: playerOneReducer,
  playerTwo: playerTwoReducer,
  winner: winnerReducer,
  field: fieldReducer,
  step: stepReducer,
};
