import { combineReducers } from 'redux';

import menuReducer from 'components/MenuBar/reducers';

export default combineReducers({
  menu: menuReducer
});
