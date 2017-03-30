import React, { Component } from 'react';

class AddLink extends Component {

  constructor (props) {
    super(props);
    this.state = {
      title: '',
      link: ''
    };

    this.addToList = this.addToList.bind(this);
  }

  addToList (event) {
    event.preventDefault();
    this.props.addToList(this.state);
  }

  render () {
    return (
      <form onSubmit={this.addToList}>
        <input type="text" placeholder="Tutotial Title" onChange={({ target }) => this.setState({ title: target.value }) } value={this.state.title} />
        <input type="text" placeholder="Tutotial Link" onChange={({ target }) => this.setState({ link: target.value }) } value={this.state.link} />
        <button type="submit">Add Link</button>
      </form>
    );
  }
}

export default AddLink;
