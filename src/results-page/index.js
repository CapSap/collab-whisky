import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from 'components/Page';
import NotFound from 'components/NotFound';
import isEmpty from 'lodash/isEmpty';

class ResultsPage extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.shape({}),
    payload: PropTypes.shape({}),
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  static defaultProps = {
    hasError: null,
    payload: null
  };

  componentDidMount() {
    const { isLoading, payload, history } = this.props;

    if (!isLoading && isEmpty(payload)) {
      history.push('/');
    }
  }

  render() {
    const { isLoading, hasError, payload } = this.props;

    if (isLoading) {
      return <div>loading</div>;
    }

    if (hasError || (payload && isEmpty(payload.data))) {
      return <NotFound error={hasError} />;
    }

    if (isEmpty(payload)) {
      return null;
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
  }
}

const mapState = ({ menu }) => ({ ...menu });

export default withRouter(connect(mapState)(ResultsPage));
