import logo from 'assets/logo.png';

import styles from './styles';

const PrimaryNavBar = () => (
  <div className={styles.base}>
    <img src={logo} className={styles.logo} alt="IMDB" />

    <div>
      menu items
    </div>
  </div>
);

export default PrimaryNavBar;
