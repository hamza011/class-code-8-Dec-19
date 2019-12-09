import React, { Component } from 'react';
import Header from './Header'
import Jumbotrun from './Jumbotrun'
import Content from './Content'
class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Jumbotrun />
          <Content />
      </div>
    );
  }
}

export default App;
