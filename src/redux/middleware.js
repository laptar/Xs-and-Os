import { addNewStepAction } from './actions';

export const newSteap = store => next => action => {
  if (action.type === addNewStepAction.type) {
    const newField = [...store.getState().field];
    newField[action.payload.index] = action.payload.symbol;
    return next({ type: 'addStep', payload: newField });
  }
  return next(action);
};
