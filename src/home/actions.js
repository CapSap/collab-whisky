import conf from 'conf';
import axios from 'axios';

const featureName = 'latestmovies';
/*
  Action types are simple strings.
  Think of them as the name for each of your actions.
*/
export const actionTypes = {
  fetchLatestMovies: `${featureName}/FETCH_LATEST_MOVIES`
};

// this is the action creator that makes the action
export const fetchLatestMovies = () => dispatch => {
  const url = `${conf.API_URL}/movie/latest?api_key=${conf.API_KEY}`;

  /*
    actions are objects. Anything inside dispatch() is an action.
    In this example, our actino is:
    {
      type: actionTypes.fetchLatestMovies,
      payload: axios.get(encodeURI(url))
    }

    It's an object, { [key]: [value] } pairs.

    NOTE:
      If your action needs to be asynchronous, we need to set
      the Promise as the value of the "payload" key. This is because
      we have a middleware (software within storeConfig) that listens to this
      special key called "payload".
  */
  dispatch({
    type: actionTypes.fetchLatestMovies,
    payload: axios.get(encodeURI(url))
  });
};
