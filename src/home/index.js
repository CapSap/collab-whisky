import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from 'components/Page';
import isEmpty from 'lodash/isEmpty';
import { Title, Heading, SubHeading } from 'components/typography';
import List from 'components/List';
import commonStyles from 'commonStyles';
import { fetchLatestMovies } from './actions';

class HomePage extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.shape({}),
    payload: PropTypes.shape({}),
    fetchMovies: PropTypes.func.isRequired
  };

  static defaultProps = {
    hasError: null,
    payload: null
  };

  // check for asynchronous payload data
  // if it does not exist, dispatch redux action to fetch latest movies
  componentDidMount() {
    const { payload, fetchMovies } = this.props;

    if (isEmpty(payload)) {
      fetchMovies();
    }
  }

  render() {
    const { isLoading, hasError, payload } = this.props;
    console.log(payload);

    if (isLoading) {
      return <div>Loading</div>;
    }
    // handle hasError scenario here
    if (hasError) {
      return <div>Error!</div>;
    }

    return (
      <Page.Content column>
        <Title>Latest Movies</Title>
        <List isLoading={isLoading} hasError={hasError}>
          Movies
        </List>
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
