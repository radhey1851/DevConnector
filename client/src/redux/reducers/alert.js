import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

/* the state template for alerts is an array of alterts like
 ** {
 **  id : 1,
 **  msg: 'Example alter',
 **  type: 'success/failure' etc
 ** }
 */
const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ALERT: {
      return [...state, action.payload];
    }
    case REMOVE_ALERT: {
      return state.filter(alert => alert !== action.payload);
    }

    default:
      return state;
  }
}
