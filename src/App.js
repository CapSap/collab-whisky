import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';

class App extends Component {
  render() {
    console.log('props on Parent: ', this.props);
    return (
      <div className={`${styles.App}`}>
        DUDE
        <br />
        <br />
        <br />
        <WelcomeTest />
        <Children abc = "test" />
        <Child abc = "test" />
        <Countdown />
      </div>
    );
  }
}



function WelcomeTest() {
  return <h1> Hello </h1>,
      <button > Test </button>
}


class Children extends Component {
  render() {
    console.log('props on Childs: ', this.props);
    const abc = this.props.abc;
    console.log('abc = ', abc);
    return (
      <div>This is my APP</div>
    );
  }
}

const Child  = (props) => {
  console.log('props: ', props);
  return (
    <div>This is my APP TOO </div>
  );
};

class Countdown extends Component {
  render() {
    const arrive = new Date('September 12, 2018 06:05:00 GMT +10')
    // from https://gist.github.com/remino/1563878
    function convertMS(ms) {
      var d, h, m, s;
      s = Math.floor(ms / 1000);
      m = Math.floor(s / 60);
      s = s % 60;
      h = Math.floor(m / 60);
      m = m % 60;
      d = Math.floor(h / 24);
      h = h % 24;
      return (
        d + " Days " + m + " Minutes " + s + " Seconds "
      );
    }
    console.log(convertMS(2418131631));

    return (
      <div>
        <h1> G'day! Landing home in {convertMS(arrive - Date.now())} </h1>
        </div>
    )
  }
}

// function convertMS(ms) {
// var d, h, m, s;
// s = Math.floor(ms / 1000);
// m = Math.floor(s / 60);
// s = s % 60;
// h = Math.floor(m / 60);
// m = m % 60;
// d = Math.floor(h / 24);
// h = h % 24;
// return { d "Days"
// }
// };


export default App;
