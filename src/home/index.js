import PropTypes from 'prop-types';
import SearchBar from './searchbar';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: '',
    };

  }


 

  

  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <h1>G'day! Landing home in {this.state.count}</h1>
        <SearchBar />
      </div>
    );
  }
}

HomePage.propTypes = {
  isLoading: PropTypes.bool,
};

export default HomePage;
