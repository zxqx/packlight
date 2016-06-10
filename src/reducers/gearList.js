import { createReducer } from 'redux-create-reducer';
import { ADD_GEAR_ITEM } from '../actions/gearList';

const initialState = [
  {
    name: 'Eagles Nest Outfitters - SingleNest Hammock',
    weight: 1,
    image: 'http://ecx.images-amazon.com/images/I/41xyhUZ8jmL._SL75_.jpg'
  },
  {
    name: 'Carhartt Men\'s Workwear Short Sleeve T-Shirt in Original Fit K88',
    weight: 3,
    image: 'http://ecx.images-amazon.com/images/I/410gRKAMQeL._SL75_.jpg'
  },
  {
    name: 'Black Diamond Storm Head Lamp',
    weight: 0.55,
    image: 'http://ecx.images-amazon.com/images/I/41YT8SpXfGL._SL75_.jpg'
  },
  {
    name: 'Black Diamond Titan Lantern - Dark Chocolate',
    weight: 1,
    image: 'http://ecx.images-amazon.com/images/I/31BQZMaEyKL._SL75_.jpg'
  },
  {
    name: 'MinnKota MK 315D On-Board Battery Charger (3 Banks, 5 Amps per Bank)',
    weight: 15.43,
    image: 'http://ecx.images-amazon.com/images/I/31t2r3Y8pDL._SL75_.jpg'
  },
];

export default createReducer(initialState, {
  [ADD_GEAR_ITEM](state, action) {
    return [
      ...state,
      action.payload
    ];
  }
});
