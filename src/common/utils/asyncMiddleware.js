const isPromise = obj => Boolean(obj)
  && (typeof obj === 'object' || typeof obj === 'function')
  && Boolean(obj.then)
  && typeof obj.then === 'function';

export const getInitState = (info = {}) => ({
  isLoading: false,
  error: null,
  ...info,
});

export default ({ dispatch }) => next => (action) => {
  if (!isPromise(action.payload)) {
    return next(action);
  }

  dispatch({
    ...action,
    payload: null,
    isLoading: true,
    error: null,
  });

  return action.payload
    .then(payload => dispatch({
      ...action,
      payload,
      isLoading: false,
      error: null,
    }))
    .catch(error => dispatch({
      ...action,
      payload: null,
      isLoading: false,
      error,
    }));
};
