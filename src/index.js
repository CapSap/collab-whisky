import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './storeConfig';
import App from './App';

import 'antd/dist/antd.css';
import 'styles/base';

const Main = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Main;

ReactDOM.render(<Main />, document.getElementById('root'));
