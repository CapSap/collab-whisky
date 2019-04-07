import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from 'components/Page';
import isEmpty from 'lodash/isEmpty';
import conf from 'conf';

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
    if (isEmpty(payload)) {
      return null;
    }

    if (isLoading) {
      return <div>Loading</div>;
    }
    // handle hasError scenario here
    if (hasError) {
      return <div>Error!</div>;
    }

    return (
      <Page.Content column>
        <Title>Latest Movie</Title>

        <List isLoading={isLoading} hasError={hasError}>  
        <img src={`${conf.IMAGE_URL}/w500${payload.data.poster_path}`} alt={payload.data.title} height="300" />
          <List.Item key={payload.data.id}>
              <div className={classNames(
                  commonStyles.flex,
                  commonStyles.flexAuto,
                  commonStyles.flexColumn
                )}>                
              <Heading>
                {payload.data.title}                
              </Heading>
              <SubHeading>{payload.data.vote_average}</SubHeading>
              <p>{payload.data.release_date}</p>
              <p>{payload.data.overview}</p>
              </div>
            </List.Item>
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
