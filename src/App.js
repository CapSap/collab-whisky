import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: '',
    };

    setInterval(this.tidyTime, 20);
  }

  // from https://gist.github.com/remino/1563878
  convertMS = (ms) => {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    ms = ms % 1000;

    return (
      d + " Days, " + m + " Minutes, " + s + " Seconds, " + ms + " Fast seconds"
    );
  }

  tidyTime = () => {
    const arrive = new Date('September 12, 2018 06:05:00 GMT +10');

    this.setState({ count: this.convertMS(arrive - Date.now()) });
  }

  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <h1>G'day! Landing home in {this.state.count}</h1>
      </div>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool,
};

export default App;
