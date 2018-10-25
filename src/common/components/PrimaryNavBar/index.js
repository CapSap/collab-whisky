import logo from 'assets/logo.png';
import { Select, Button } from 'antd';
import isEmpty from 'lodash/isEmpty';

import styles from './styles';

const menuCategories = [
  'All',
  'Title',
  'TV Episodes',
  'Names',
  'Companies',
  'Advanced Search >>'
].map(_ => ({
  name: _,
  value: _.toLowerCase()
}));

class PrimaryNavBar extends React.Component {
  state = {
    selectedCategory: menuCategories[0].value,
    searchQuery: ''
  };

  handleInputChange = newState => this.setState(newState);

  handleKeyPress = event => {
    const { searchQuery } = this.state;

    if (event.key === 'Enter' || (event.keyCode === 13 && !isEmpty(searchQuery))) {
      this.submit();
    }
  };

  submit = () => {
    const { searchQuery, selectedCategory } = this.state;

    console.log(`query TMDB, searching for "${searchQuery}" under "${selectedCategory}"`);
  };

  render() {
    const { selectedCategory, searchQuery } = this.state;

    return (
      <div className={styles.base}>
        <img src={logo} className={styles.logo} alt="IMDB" />

        <div className={styles.content}>
          <input
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
            style={{ backgroundColor: '#F5C518', fontWeight: 'bold', color: '#000' }}
            icon="search"
            onClick={this.submit}
          />
        </div>

        <div>menu items</div>
      </div>
    );
  }
}

export default PrimaryNavBar;
