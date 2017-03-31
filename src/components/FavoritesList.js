import React, { Component } from 'react';

class FavoritesList extends Component {
  removeItem (favorite, event) {
    event.preventDefault();
    this.props.removeItem(favorite);
  }

  render () {
    if (this.props.favorites.length <= 0) {
      return (
        <div className="no-favorites">
          <h3>No Favorites!</h3>
        </div>
      );
    }

    return (
      <div>
        <ul className="container-list">
          {this.props.favorites.map((favorite, key) =>
            <li key={key} className="item">
              <button className="close" onClick={this.removeItem.bind(this, favorite)}>X</button>
              <div className="content">
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
