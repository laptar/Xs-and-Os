import { createAction } from '@reduxjs/toolkit';

export const addNameXAction = createAction('addNameX');
export const addNameOAction = createAction('addNameO');
export const addWinXAction = createAction('addWinX');
export const addWinOAction = createAction('addWinO');
export const resetPlayerOneAction = createAction('resetPlayerOne');
export const resetPlayerTwoAction = createAction('resetPlayerTwo');
export const changeWinnerAction = createAction('changeWinner');
export const resetWinnerAction = createAction('resetWinner');
export const addNewStepAction = createAction('addStep');
export const resetFieldAction = createAction('resetField');
export const changePlayerXAction = createAction('changePlayerX');
export const changePlayerOAction = createAction('changePlayerO');
export const nextStepAction = createAction('nextStep');
export const resetStepAction = createAction('resetStep');
