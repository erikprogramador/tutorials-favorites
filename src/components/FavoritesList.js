import React, { Component } from 'react';

class FavoritesList extends Component {
  removeItem (favorite, event) {
    event.preventDefault();
    this.props.removeItem(favorite);
  }

  render () {
    if (this.props.favorites.length <= 0) {
      return (
        <div>
          <h3>No Favorites!</h3>
        </div>
      );
    }

    return (
      <div>
        <ul>
          {this.props.favorites.map((favorite, key) =>
            <li key={key}>
              <button onClick={this.removeItem.bind(this, favorite)}>X</button>
              <div>
                <h3>{favorite.title}</h3>
                <a href={favorite.link} target="_blank">Go To</a>
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default FavoritesList;
