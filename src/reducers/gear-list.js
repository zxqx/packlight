import { createReducer } from 'redux-create-reducer';
import { ADD_GEAR_ITEM, REMOVE_GEAR_ITEM } from '../actions/gear-list';

const initialState = {
  items: [
    {
      id: 'B000PGKVOY',
      name: 'Eagles Nest Outfitters - SingleNest Hammock',
      weight: 1,
      image: 'http://ecx.images-amazon.com/images/I/41xyhUZ8jmL._SL75_.jpg'
    },
    {
      id: 'B002G9UDKU',
      name: 'Carhartt Men\'s Workwear Short Sleeve T-Shirt in Original Fit K88',
      weight: 3,
      image: 'http://ecx.images-amazon.com/images/I/410gRKAMQeL._SL75_.jpg'
    },
    {
      id: 'B00J084900',
      name: 'Black Diamond Storm Head Lamp',
      weight: 0.55,
      image: 'http://ecx.images-amazon.com/images/I/41YT8SpXfGL._SL75_.jpg'
    },
    {
      id: 'B004AXLJG2',
      name: 'Black Diamond Titan Lantern - Dark Chocolate',
      weight: 1,
      image: 'http://ecx.images-amazon.com/images/I/31BQZMaEyKL._SL75_.jpg'
    },
    {
      id: 'B0042T8XRC',
      name: 'MinnKota MK 315D On-Board Battery Charger (3 Banks, 5 Amps per Bank)',
      weight: 15.43,
      image: 'http://ecx.images-amazon.com/images/I/31t2r3Y8pDL._SL75_.jpg'
    }
  ]
};

export default createReducer(initialState, {
  [ADD_GEAR_ITEM](state, action) {
    return {
      ...state,
      items: [
        ...state.items,
        action.payload
      ]
    };
  },
  [REMOVE_GEAR_ITEM](state, action) {
    const items = state.items.filter(item => item.id !== action.payload.id);

    return {
      ...state,
      items
    };
  }
});
