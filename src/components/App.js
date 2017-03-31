import React, { Component } from 'react';
import AddLink from './AddLink';
import FavoritesList from './FavoritesList';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      favorites: []
    };
    this.addToList = this.addToList.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addToList ({ title, fullLink }) {
    console.log(fullLink);
    const favorites = this.state.favorites.concat({ title, link: fullLink });
    this.setState({ favorites });
  }

  removeItem (favorite) {
    const favorites = this.state.favorites.filter(fav => fav !== favorite);
    this.setState({ favorites });
  }

  render () {
    return (
      <div className="container">
        <h1 className="title">Favorites Tutorials</h1>
        <AddLink addToList={this.addToList} />
        <FavoritesList favorites={this.state.favorites} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default App;
