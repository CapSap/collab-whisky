import { connect } from 'react-redux';
import Page from 'components/Page';
import isEmpty from 'lodash/isEmpty';

const ResultsPage = ({ isLoading, hasError, payload }) => {
  if (isLoading) {
    return <div>loading</div>;
  }

  if (hasError || isEmpty(payload)) {
    return <div>Error occurred</div>;
  }

  console.log('payload: ', payload);

  return (
    <Page.Content>
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
