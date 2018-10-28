import PropTypes from 'prop-types';
import Page from 'components/Page';
import MenuBar from 'components/MenuBar';
import { Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import HomePage from 'home';

const App = props => {
  const { isLoading } = props;

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Page.Wrapper>
      <MenuBar />

      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Page.Wrapper>
  );
};

App.propTypes = {
  isLoading: PropTypes.bool
};

export default App;
