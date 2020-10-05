import React, { PureComponent } from 'react';
import { FaPlusSquare, FaMinusSquare, FaTrash } from 'react-icons/fa';

export default class Habit extends PureComponent {
  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`);
  }

  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} unmounted`);
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    console.log(`habit: ${name}`);

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <FaPlusSquare />
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <FaMinusSquare />
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <FaTrash />
        </button>
      </li>
    );
  }
}
