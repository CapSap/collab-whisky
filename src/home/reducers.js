import { getInitState } from '../common/utils/asyncMiddleware';

import { actionTypes } from './actions';

export default (state = getInitState(), action) => {
  switch (action.type) {
    case actionTypes.fetchLatestMovies:
      /*
        Remember, your action has these keys:
          type: which is used in the switch statement above
          payload: values of the asynchronous action
          isLoading: our middleware sets this
            (to let us know if we are in the process of fetching data)
          hasError: our middleware sets this
            (to let us know if there was an error while fetching data)
      */
      return {
        ...state,
        ...action
      };

    /*
      When we do something like this:
      {
        ...action
      }

      It means:
        1) create a new object
        2) ...action means spread the key-value pairs within abc
        into this new object. So in this example, we will get:
          {
            type,
            payload,
            isLoading,
            hasError,
          }
    */

    default:
      return state;
  }
};
