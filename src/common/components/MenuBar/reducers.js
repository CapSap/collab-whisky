import { getInitState } from 'utils/asyncMiddleware';

import { actionTypes } from './actions';

export default (state = getInitState(), action) => {
  switch (action.type) {
    case actionTypes.fetchMoviesViaQuery:
      return {
        ...state,
        ...action
      };

    default:
      return state;
  }
};
