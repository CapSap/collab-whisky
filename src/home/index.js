import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from 'components/Page';
import isEmpty from 'lodash/isEmpty';
import { fetchLatestMovies } from './actions';



class HomePage extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    hasError: PropTypes.shape({}),
    payload: PropTypes.shape({}),
  };

  static defaultProps = {
    isLoading: false,
    hasError: null,
    payload: null
  };

  componentDidMount() {
    const { payload } = this.props;
    console.log('test');

    if (isEmpty(payload)) {
      fetchLatestMovies();
      console.log(payload);
    };
    // check for asynchronous payload data
    // if it does not exist, dispatch redux action to fetch latest movies
  }

  render() {
    const { isLoading, hasError, payload } = this.props;
    console.log(payload);

    if (isLoading) {
      return <div>Loading</div>;
    }

    if (hasError) {
      // handle hasError scenario here
    }

    return (
      <Page.Content column>
        <h1>Latest Movies</h1>
        <p>(list movies here)</p>
      </Page.Content>
    );
  }
}

// connect to redux state & actions here
const mapState = ({ home }) => home;

const mapDispatch = { fetchMovies: fetchLatestMovies };

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(HomePage)
);