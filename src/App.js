import Page from 'components/Page';
import MenuBar from 'components/MenuBar';
import NotFoundPage from 'components/NotFound';
import { Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import HomePage from 'home';
import ResultsPage from 'results-page';

const App = () => (
  <Page.Wrapper>
    <MenuBar />

    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/results" component={ResultsPage} />

      <Route component={NotFoundPage} />
    </Switch>
  </Page.Wrapper>
);

export default App;
