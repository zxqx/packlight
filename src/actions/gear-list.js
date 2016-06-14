import { fetchGearLists, fetchGearListSuggestions } from '../middleware/api';

export const UPDATE_GEAR_LISTS = 'UPDATE_GEAR_LISTS';
export const ADD_GEAR_ITEM = 'ADD_GEAR_ITEM';
export const REMOVE_GEAR_ITEM = 'REMOVE_GEAR_ITEM';

export function getGearLists() {
  return async dispatch => {
    const res = await fetchGearLists();

    dispatch(updateGearLists(res.gearList));
  }
}

export function updateGearLists(payload) {
  return {
    type: UPDATE_GEAR_LISTS,
    payload
  };
}

export function addGearItem(payload) {
  return {
    type: ADD_GEAR_ITEM,
    payload
  };
}

export function removeGearItem(payload) {
  return {
    type: REMOVE_GEAR_ITEM,
    payload
  };
}

export function getGearListSuggestions(keywords) {
  return async () => {
    try {
      return await fetchGearListSuggestions(keywords);
    } catch (e) {
      throw new Error(e);
    }
  };
}
