import { createSelector } from 'reselect';

const gearListByIdSelector = (state, props) => {
  return state.gearList[props.routeParams.listId];
}

const gearListListSelector = (state, props) => {
  return state.gearList;
}

export const gearListSelector = createSelector(
  gearListByIdSelector,
  gearListListSelector,
  (gearList, gearLists) => {
    if (!gearList) {
      return {
        gearList: {},
        gearLists: []
      }
    }

    return {
      gearList,
      gearLists: Object.keys(gearLists)
        .map(id => gearLists[id])
    };
  }
);
