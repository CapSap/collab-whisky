import conf from 'conf';
import axios from 'axios';

const featureName = 'latestmovies';
export const actionTypes = {
  fetchLatestMovies: `${featureName}/FETCH_LATEST_MOVIES`
};

export const fetchLatestMovies = () => dispatch => {
  const url = `${conf.API_URL}/movie/latest?api_key=${conf.API_KEY}`;

  dispatch({
    type: actionTypes.fetchLatestMovies,
    payload: axios.get(encodeURI(url))
  });
};
