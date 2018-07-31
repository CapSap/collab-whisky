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
        <Child abc="test" />
      </div>
    );
  }
}

// class Child extends Component {
//   render() {
//     console.log('props on Child: ', this.props);
//     const abc = this.props.abc;
//     console.log('abc = ', abc);
//     return (
//       <div>This is my APP</div>
//     )
//   }
// }

const Child = (props) => {
  console.log('props: ', props);
  return (
    <div>This is my APP TOO </div>
  );
};

export default App;
