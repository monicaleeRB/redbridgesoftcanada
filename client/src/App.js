import React, { Component } from 'react';

import IndexNavbar from "./components/Navbars/IndexNavbar";
import Main from "./components/Main";
import DemoFooter from "./components/Footers/DemoFooter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <IndexNavbar />
        <Main />
        <DemoFooter />
      </div>
    );
  }
}

export default App;
