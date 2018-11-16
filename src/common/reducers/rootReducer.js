import { combineReducers } from 'redux';

import menuReducer from 'components/MenuBar/reducers';
import homeReducer from 'home/reducers.js';

export default combineReducers({
  menu: menuReducer,
  home: homeReducer
});
