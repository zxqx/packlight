import { createSelector } from 'reselect';

const gearListByIdSelector = (state, props) => {
  if (props.routeParams.listId) {
    return state.gearList[props.routeParams.listId];
  }
}

const gearListListSelector = state => state.gearList;

export const gearListSelector = createSelector(
  gearListByIdSelector,
  gearListListSelector,
  (gearList, gearLists) => {
    return {
      gearList: gearList || {},
      gearLists: Object.keys(gearLists).map(id => gearLists[id])
    };
  }
);
