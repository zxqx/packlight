import { fetchGearListSuggestions } from '../middleware/api';

export const ADD_GEAR_ITEM = 'ADD_GEAR_ITEM';

export function addGearItem(payload) {
  return {
    type: ADD_GEAR_ITEM,
    payload
  };
}

export function getGearListSuggestions(keywords) {
  return async dispatch => {
    try {
      return await fetchGearListSuggestions(keywords);
    } catch (e) {
      console.log(e);
    }
  };
}
