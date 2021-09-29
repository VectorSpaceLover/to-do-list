import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");
  }

  function addTask(){
    console.log('Add a task to todo list.');

    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");
  }

  function deleteTask(){
    // console.log('Delete a task from todo list');
    props.deleteTask();
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className = '' style = {{padding: '5rem'}}>
      <h2 className="label-wrapper">
        
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <div className = 'btn-group'>
        <button type="button" onClick = {addTask} className="btn btn__primary">
          Add
        </button>
        <button type="button" onClick = {deleteTask} className="btn btn__primary">
          Delete
        </button>
      </div>
    </form>
  );
}

export default Form;
