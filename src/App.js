import React, { Component } from 'react';
import styles from './App.css';

class App extends Component {
  render() {
    console.log('props on Parent: ', this.props);
    return (
      <div className={`${styles.App}`}>
        hello
        <br />
        <br />
        <br />
        
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
  constructor(props) {
    super(props)
    this.state = {
      count: ""
    }
    this.tidyTime = this.tidyTime.bind(this);

    setInterval(this.tidyTime, 20)
  }
   tidyTime() {
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
      ms = ms % 1000;

      return (
        d + " Days, " + m + " Minutes, " + s + " Seconds, " + ms + " Fast seconds"
      );
    }
    this.setState({count: convertMS(arrive - Date.now())})

}
  render() {


    return (
       <div>
         <h1> G'day! Landing home in {this.state.count} </h1>
       </div>
      )
  }
}

export default App;
