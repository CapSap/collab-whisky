import conf from 'conf';
import axios from 'axios';

const featureName = 'menu-bar';
export const actionTypes = {
  fetchMoviesViaQuery: `${featureName}/FETCH_MOVIES_VIA_QUERY`
};

export const fetchMoviesViaQuery = (searchQuery, category) => dispatch => {
  const url = `${conf.API_URL}/search/${category}`;
  const query = `?api_key=${conf.API_KEY}&query=${searchQuery}${conf.defaultQueryParams}`;

  dispatch({
    type: actionTypes.fetchMoviesViaQuery,
    payload: axios.get(encodeURI(url + query))
  });
};
