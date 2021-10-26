import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [toDoList, setToDoList] = React.useState([
    {
      task: '1',
    },
    {
      task: '2',
    },
    {
      task: '3',
    }
  ]);

  function addTodo(newTask) {
    var updatedList = [...toDoList, { task: newTask }];
    setToDoList(updatedList);
  }

  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
  };

  return (
    <div className="App">
      <h1>TO DO</h1>
        {toDoList.map((task) => (
          <li>{task.task}</li>
        ))} 

    <form className='form' onSubmit={handleSubmit}>
        <label>What is need to be done?</label><br/>
        <input
        onChange={e => setValue(e.target.value)}
        ></input> <br/>
        <button type='submit'>ADD</button>
    </form>
    </div>
  );
}

export default App;
