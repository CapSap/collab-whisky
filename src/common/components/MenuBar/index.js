import logo from 'assets/logo.png';
import { Input, Select, Button } from 'antd';
import isEmpty from 'lodash/isEmpty';

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
  },
  {
    name: 'Advanced Search >>',
    value: 'more'
  }
];

class MenuBar extends React.Component {
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

    console.log(`query TMDB, searching for "${searchQuery}" under "${selectedCategory}"`);
    if (isEmpty(searchQuery)) {
    }
  };

  render() {
    const { selectedCategory, searchQuery } = this.state;

    return (
      <div className={styles.base}>
        <img src={logo} className={styles.logo} alt="IMDB" />

        <div className={styles.content}>
          <Input
            placeholder="Find Movies, TV Shows, Celebrities and more..."
            value={searchQuery}
            onChange={event => this.handleInputChange({ searchQuery: event.target.value })}
            onKeyPress={this.handleKeyPress}
          />

          <Select
            defaultValue={selectedCategory}
            style={{ height: '100%', width: '150px' }}
            onChange={value => this.handleDropdownSelect({ selectedCategory: value })}
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
            icon="search"
            onClick={this.submit}
          />
        </div>

        <div>menu items</div>
      </div>
    );
  }
}

export default MenuBar;
