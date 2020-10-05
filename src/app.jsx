import React, { Component } from 'react';
import './app.css';
import FcAddForm from './components/fcAddForm';
import Habits from './components/habits';
import Navbar from './components/navbar';

export default class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Runnig', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];

    this.setState({ habits });
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) =>
      item.id === habit.id ? { ...habit, count: habit.count + 1 } : item
    );
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) =>
      item.id === habit.id && item.count > 0
        ? { ...habit, count: habit.count - 1 }
        : item
    );
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) =>
      habit.count !== 0
        ? {
            ...habit,
            count: 0,
          }
        : habit
    );
    this.setState({ habits });
  };

  render() {
    return (
      <div>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <FcAddForm onAdd={this.handleAdd} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <button className="reset" onClick={this.handleReset}>
          ResetAll
        </button>
      </div>
    );
  }
}
