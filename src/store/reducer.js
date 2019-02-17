import { combineReducers } from 'redux';

import order from './modules/orders';

const reducer = combineReducers({
  order,
});

export default reducer;
