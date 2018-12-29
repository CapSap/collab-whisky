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
    const { payload, fetchMovies } = this.props;

    if (isEmpty(payload)) {
      fetchMovies();
    }

    // check for asynchronous payload data
    // if it does not exist, dispatch redux action to fetch latest movies
  }

  render() {
    const { isLoading, hasError, payload } = this.props;
    console.log(payload.data);

    if (isLoading) {
      return <div>Loading</div>;
    }

    if (hasError) {
      // handle hasError scenario here
      console.log('error');
    }

    return (
      <Page.Content column>
        <h1>Latest Movies</h1>
        <p>(list movies here)
        <List isLoading={isLoading} hasError={hasError}>
          {payload.data.map(item => (
            <List.Item key={item.id}>
              <img src={`${conf.IMAGE_URL}/w500${item.poster_path}`} alt={item.title} />

              <div
                className={classNames(
                  commonStyles.flex,
                  commonStyles.flexAuto,
                  commonStyles.flexColumn
                )}
              >
                <Heading>{item.title}</Heading>
                <SubHeading>{item.vote_average}</SubHeading>
                <p>{item.release_date}</p>
                <p>{item.overview}</p>
              </div>
            </List.Item>
          ))}
        </List>
        </p>
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