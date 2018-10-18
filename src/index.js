import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './storeConfig';
import App from './App';

import 'antd/dist/antd.css';
import 'styles/base';

const renderApp = props => ReactDOM.render(
  <Provider store={store} {...props}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept(App, renderApp);
}

renderApp();
