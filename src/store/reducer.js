import { combineReducers } from 'redux';

import orders from './modules/Orders';

const reducer = combineReducers({
  orders,
});

export default reducer;
