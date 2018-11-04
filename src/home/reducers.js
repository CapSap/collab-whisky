import { getInitState } from '../common/utils/asyncMiddleware';

import { actionTypes } from './actions';

export default (state = getInitState(), action) => {
  switch (action.type) {
    case actionTypes.fetchLatestMovies:
      return {
        ...state,
        ...action
      };

    default:
      return state;
  }
};
