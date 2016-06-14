import { createSelector } from 'reselect';

const gearListsSelector = (state, props) => {
  return state.gearList[props.routeParams.listId];
}

export const gearListSelector = createSelector(
  gearListsSelector,
  (gearList) => {
    return {
      gearList: gearList || {}
    };
  }
);
