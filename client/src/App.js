import React, { Component } from 'react';

import IndexNavbar from "./components/Navbars/IndexNavbar";
import Main from "./components/Main";
import IndexFooter from "./components/Footers/IndexFooter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <IndexNavbar />
        <Main />
        <IndexFooter />
      </div>
    );
  }
}

export default App;
