import React, { Component } from 'react';

class AddLink extends Component {

  constructor (props) {
    super(props);
    this.state = {
      title: '',
      link: '',
      selectItem: 'https://'
    };

    this.addToList = this.addToList.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  addToList (event) {
    event.preventDefault();
    const data = this.state;
    data.fullLink = `${this.state.selectItem}${this.state.link}`;
    this.props.addToList(data);
    this.resetState();
  }

  resetState () {
    this.setState({
      title: '',
      link: '',
      selectItem: 'https://'
    });
  }

  render () {
    return (
      <form onSubmit={this.addToList}>
        {this.state.fullLink}
        <input type="text" placeholder="Tutotial Title" onChange={({ target }) => this.setState({ title: target.value }) } value={this.state.title} />
        <select value={this.state.selectItem} onChange={({ target }) => this.setState({ selectItem: target.value }) }>
          <option value="https://">https://</option>
          <option value="http://">http://</option>
        </select>
        <input type="text" placeholder="Tutotial Link" onChange={({ target }) => this.setState({ link: target.value }) } value={this.state.link} />
        <button type="submit">Add Link</button>
      </form>
    );
  }
}

export default AddLink;
