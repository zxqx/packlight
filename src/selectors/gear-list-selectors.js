import { createSelector } from 'reselect';

const gearListByIdSelector = (state, props) => {
  if (props.routeParams.listId) {
    return state.gearList[props.routeParams.listId];
  }
}

const gearListListSelector = (state, props) => {
  return state.gearList;
}

export const gearListSelector = createSelector(
  gearListByIdSelector,
  gearListListSelector,
  (gearList, gearLists) => {
    return {
      gearList: gearList || {},
      gearLists: processGearLists(gearLists),
      selectedGearList: gearList ? gearList.id : ''
    };
  }
);

function processGearLists(gearLists) {
  if (gearLists) {
    return Object.keys(gearLists)
      .map(id => gearLists[id]);
  }
  else {
    return [];
  }
}
