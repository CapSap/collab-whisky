import Page from 'components/Page';
import { withRouter } from 'react-router-dom';
import Button from 'antd/lib/button';

const NotFoundPage = ({ errors, history }) => {
  let message = 'An unexpected error occurred, please return to Home Page to continue.';

  if (errors.constructor === String) {
    message = errors;
  }

  return (
    <Page.Content>
      {message}
      <br />
      <Button onClick={() => history.push('/')}>Return Home</Button>
    </Page.Content>
  );
};
NotFoundPage.propTypes = {
  errors: PropTypes.shape({}),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
NotFoundPage.defaultProps = {
  errors: ''
};

export default withRouter(NotFoundPage);
