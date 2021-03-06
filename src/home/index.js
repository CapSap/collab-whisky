import Page from 'components/Page';

class HomePage extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    hasError: PropTypes.shape({})
  };

  static defaultProps = {
    isLoading: false,
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
      <Page.Content column>
        <h1>Latest Movies</h1>
        <p>(list movies here)</p>
      </Page.Content>
    );
  }
}

// connect to redux state & actions here
export default HomePage;
