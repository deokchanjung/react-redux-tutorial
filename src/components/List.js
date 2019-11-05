import React, { Component } from 'react';

export default class List extends Component {
  render() {
    const { items, keyword } = this.props;

    return (
      <ul>
        {items
          .filter(item => item.indexOf(keyword) > -1)
          .map((item, i) => (
            <li key={i}>{item}</li>
          ))}
      </ul>
    );
  }
}
