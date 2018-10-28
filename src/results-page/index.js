import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from 'components/Page';
import NotFound from 'components/NotFound';
import isEmpty from 'lodash/isEmpty';
import conf from 'conf';

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

    return (
      <Page.Content center>
        {payload.data.results.map(movie => (
          <div key={movie.id} style={{ border: '1px solid red' }}>
            <h1>{movie.title}</h1>
            <h2>{movie.vote_average}</h2>
            <img src={`${conf.IMAGE_API}/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
          </div>
        ))}
      </Page.Content>
    );
  }
}

const mapState = ({ menu }) => ({ ...menu });

export default withRouter(connect(mapState)(ResultsPage));
