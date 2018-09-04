import PropTypes from 'prop-types';

const App = (props) => {
  const { isLoading } = props;

  if (isLoading) {
    return <div>Loading</div>;
  }

  return <div>React here</div>;
};

App.propTypes = {
  isLoading: PropTypes.bool,
};

export default App;
