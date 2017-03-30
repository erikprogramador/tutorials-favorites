import React, { Component } from 'react';
import AddLink from './AddLink';

class App extends Component {

  constructor (props) {
    super(props);
    this.addToList = this.addToList.bind(this);
  }

  addToList ({ title, link }) {
    console.log(title, link);
  }

  render () {
    return (
      <div>
        <h1>Favorites Tutorials</h1>
        <AddLink addToList={this.addToList} />
      </div>
    );
  }
}

export default App;
