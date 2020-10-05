import React, { PureComponent } from 'react';

export default class HabitAddForm extends PureComponent {
  state = {
    value: '',
  };

  formRef = React.createRef();
  inputRef = React.createRef();

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} onSubmit={this.onSubmit}>
        <input ref={this.inputRef} placeholder="Habit" className="input" />
        <button className="input-button">Add</button>
      </form>
    );
  }
}
