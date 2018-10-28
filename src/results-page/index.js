import { connect } from 'react-redux';
import Page from 'components/Page';
import NotFound from 'components/NotFound';
import isEmpty from 'lodash/isEmpty';

const ResultsPage = ({ isLoading, hasError, payload }) => {
  if (isLoading) {
    return <div>loading</div>;
  }

  if (hasError || (payload && isEmpty(payload.data))) {
    return <NotFound error={hasError} />;
  }

  console.log('payload: ', payload);
  const data = payload.data.results;
  console.log('data: ', data);

  return (
    <Page.Content center>
      <div>Hello</div>
      <span>world</span>
    </Page.Content>
  );
};
ResultsPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.shape({}),
  payload: PropTypes.shape({})
};
ResultsPage.defaultProps = {
  hasError: null,
  payload: null
};

const mapState = ({ menu }) => ({ ...menu });

export default connect(mapState)(ResultsPage);
