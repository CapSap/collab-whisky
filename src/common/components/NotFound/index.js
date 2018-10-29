import Page from 'components/Page';
import { withRouter } from 'react-router-dom';
import Button from 'antd/lib/button';

const NotFoundPage = ({ error, history }) => {
  let message = 'An unexpected error occurred, please return to Home Page to continue.';

  if (error.constructor === String) {
    message = error;
  }

  return (
    <Page.Content center>
      {message}
      <br />
      <Button onClick={() => history.push('/')}>Return Home</Button>
    </Page.Content>
  );
};
NotFoundPage.propTypes = {
  error: PropTypes.shape({}),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
NotFoundPage.defaultProps = {
  error: ''
};

export default withRouter(NotFoundPage);
