import Page from 'components/Page';

class HomePage extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.shape({})
  };

  static defaultProps = {
    hasError: null
  };

  componentDidMount() {
    // check for asynchronous payload data
    // if it does not exist, dispatch redux action to fetch latest movies
  }

  render() {
    const { isLoading, hasError } = this.props;

    if (isLoading) {
      return <div>Loading</div>;
    }

    if (hasError) {
      // handle hasError scenario here
    }

    return (
      <Page.Content>
        <h1>Latest Movies</h1>
      </Page.Content>
    );
  }
}

// connect to redux state & actions here
export default HomePage;
