import logo from 'assets/logo.png';
import { Input, Select, Button, Icon } from 'antd';
import isEmpty from 'lodash/isEmpty';
import Spinner from 'components/Spinner';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchMoviesViaQuery } from './actions';
import styles from './styles';

const menuCategories = [
  {
    name: 'All',
    value: 'multi'
  },
  {
    name: 'Title',
    value: 'movie'
  },
  {
    name: 'TV Episodes',
    value: 'tv'
  },
  {
    name: 'Companies',
    value: 'company'
  }
];

class MenuBar extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    fetchMovies: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  state = {
    selectedCategory: menuCategories[0].value,
    searchQuery: ''
  };

  handleInputChange = newState => this.setState(newState);

  handleKeyPress = event => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      this.submit();
    }
  };

  submit = () => {
    const { searchQuery, selectedCategory } = this.state;
    const { isLoading, fetchMovies, history } = this.props;

    if (isEmpty(searchQuery) || isLoading) {
      return;
    }

    fetchMovies(searchQuery, selectedCategory);
    history.push('/results');
  };

  render() {
    const { selectedCategory, searchQuery } = this.state;
    const { isLoading } = this.props;

    return (
      <div className={styles.base}>
        <img src={logo} className={styles.logo} alt="IMDB" />

        <div className={styles.content}>
          <Input
            style={{ textTransform: 'none' }}
            placeholder="Find Movies, TV Shows, Celebrities and more..."
            value={searchQuery}
            onChange={event => this.handleInputChange({ searchQuery: event.target.value })}
            onKeyPress={this.handleKeyPress}
          />

          <Select
            defaultValue={selectedCategory}
            style={{ height: '100%', width: '150px' }}
            onChange={value => this.handleInputChange({ selectedCategory: value })}
          >
            {menuCategories.map((menuItem, index) => (
              <Select.Option value={menuItem.value} key={`${menuItem.value}-${index}`}>
                {menuItem.name}
              </Select.Option>
            ))}
          </Select>

          <Button
            style={{
              backgroundColor: '#F5C518',
              fontWeight: 'bold',
              color: '#000',
              border: 'none'
            }}
            disabled={isLoading}
            onClick={this.submit}
          >
            {isLoading ? <Spinner /> : <Icon type="search" />}
          </Button>
        </div>

        <div>menu items</div>
      </div>
    );
  }
}

const mapState = ({ menu }) => ({ ...menu });

const mapDispatch = { fetchMovies: fetchMoviesViaQuery };

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(MenuBar)
);
