import React, { PureComponent } from 'react';
import { FaLeaf } from 'react-icons/fa';

export default class Navbar extends PureComponent {
  render() {
    console.log('Navbar');

    return (
      <div className="navbar">
        <FaLeaf className="navbar-logo" />
        <span className="navbar-title">Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </div>
    );
  }
}
