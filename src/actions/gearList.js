import { fetchGearListSuggestions } from '../middleware/api';

export const ADD_GEAR_ITEM = 'ADD_GEAR_ITEM';
export const REMOVE_GEAR_ITEM = 'REMOVE_GEAR_ITEM';

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
