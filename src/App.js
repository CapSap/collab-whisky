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
        <Children abc = "test" />
        <Child abc = "test" />
        <SearchBar/>
        <Button />
      </div>
    );
  }
}

class SearchBar extends Component {
  render() {
    var searchText = "test123";
    console.log(searchText);
    return (
        <form>
          <input
            type="text"
            value={this.props.searchText}
            // ? this.props.searchText. why?
            />
        </form>
    );
  }
}

class Button extends Component {
  render() {
    function buttonClicked() {
      console.log("testingbutton", {}
        // value in search bar? how to get that object?
      )
    }
    return(
      <div>
        <button type="text" onClick={buttonClicked}> Button </button>
      </div>
    );
  }
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



export default App;
