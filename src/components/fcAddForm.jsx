import React from 'react';

const FcAddForm = (props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <input ref={inputRef} placeholder="Habit" className="input" />
      <button className="input-button">Add</button>
    </form>
  );
};

export default React.memo(FcAddForm);
