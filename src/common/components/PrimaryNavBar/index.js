import logo from 'assets/logo.png';
import { Select, Button } from 'antd';

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

  handleSearch = event => this.setState({ searchQuery: event.target.value });

  handle = event => this.setState({ searchQuery: event.target.value });

  render() {
    const { selectedCategory, searchQuery } = this.state;

    return (
      <div className={styles.base}>
        <img src={logo} className={styles.logo} alt="IMDB" />

        <div className={styles.content}>
          <input
            placeholder="Find Movies, TV Shows, Celebrities and more..."
            value={searchQuery}
            onChange={this.handleSearch}
          />

          <Select defaultValue={selectedCategory} style={{ height: '100%', width: '150px' }}>
            {menuCategories.map((menuItem, index) => (
              <Select.Option value={menuItem.value} key={`${menuItem.value}-${index}`}>
                {menuItem.name}
              </Select.Option>
            ))}
          </Select>

          <Button
            style={{ backgroundColor: '#F5C518', fontWeight: 'bold', color: '#000' }}
            icon="search"
          />
        </div>

        <div>menu items</div>
      </div>
    );
  }
}

export default PrimaryNavBar;
