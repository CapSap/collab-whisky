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
    
    console.log('isLoading: ', isLoading);
    console.log('payload: ', payload);

    /*
      Our reducer sends the value of "payload" directly here.

      NOTE:
        Because of our middleware that listens to asynchronous actions,
        the value of "payload" will change 3 times!
        
        First time:
          When we first arrive to create this component, before we
          have anything set. Before we even fetchMovies(). Payload is undefined

        Second time:
          We fired off the fetchMovies() action and our middleware has
          transformed it from:
            action = {
              type: 'latestmovies/FETCH_LATEST_MOVIES',
              payload: axios.get(encodeURI(url))
            }

          to something like this:
            action = {
              type: 'latestmovies/FETCH_LATEST_MOVIES',
              payload: null,
              isLoading: true,
              hasError: false,
            }

        Third time:
          The promise has resolved with data:
            action = {
              type: 'latestmovies/FETCH_LATEST_MOVIES',
              payload: {
                data: {
                  ...blah blah blah
                },
                other,
                server,
                stuff,
                here,
              },
              isLoading: false,
              hasError: false,
            }

      You can take a look at what payload is by opening the browser console,
      right-click on the page and choose "inspect". Click on "payload" to
      drill down and see its value. and click "data" within "payload" to see
      its value and available key-value pairs within it that can be displayed.
    */

    if (isLoading) {
      return <div>Loading</div>;
    }
    // handle hasError scenario here
    if (hasError) {
      return <div>Error!</div>;
    }

    if (isEmpty(payload)) {
      return null;
    }

    return (
      <Page.Content column>
        <Title>Latest Movie</Title>
        
        <List isLoading={isLoading} hasError={hasError}>
          {/*
            You tried this:
            {payload.data.map(item => (
              <List.Item key={item.id}>
                <Heading>{item.title}</Heading>
              </List.Item>
            ))}

            This is not going to work because:
            
            1) when rendering the First time, our payload is null,
            yet we are trying to get the "data" field off of something
            that is null...which is impossible and that's where the
            application fails.
            2) we do not need to iterate over a list of items here.
            This asynchronous action returns detailed information
            on 1 particular movie. Therefore payload.data is in the form
            of an object instead of an array. We can simply display
            the values from the object directly onto the page.

            You can do an empty check for payload above (and return null) to
            prevent React from ever arriving to this point in time.
          */}
          
            <img src={`${conf.IMAGE_URL}/w500${payload.data.poster_path}`} alt={payload.data.title} height="300" />
          <List.Item>
              <div>                
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
