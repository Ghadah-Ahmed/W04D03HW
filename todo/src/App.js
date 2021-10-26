import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { name: 'Ghadah' };
//   }

//   componentWillMount(){
//    console.log('This is executed before rendering')
//    console.log(ReactDOM.findDOMNode(this))
//   }

//   componentDidMount(){
//     console.log('This is executed after rendering')
//     console.log(ReactDOM.findDOMNode(this))
//   }
//   render() {
//     return <h1>Hello, {this.state.name}</h1>;
//   }
// }


function App() {
  const [value, setValue] = React.useState("");
  const [count, setCount] = React.useState(4);
  const [toDoList, setToDoList] = React.useState([
    {
      id: 1,
      task: 'My first task',
      isDone: false
    },
    {
      id: 2,
      task: 'My second task',
      isDone: false
    },
    {
      id: 3,
      task: 'My third task',
      isDone: false
    }
  ]);

  function addTodo(newTask) {
    setCount(count + 1)
    setToDoList( [...toDoList, { task: newTask, id: count, isDone: false }] );
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue(' ')
  };

  const deleteItem = id => {
    setToDoList(toDoList.filter((task) => {
      return task.id != id
    }));
  };

  const completed = item => {
    let index = toDoList.findIndex((task) => {
      return task.id == item.id
    }) 
    const newTodos = [...toDoList];
    newTodos[index].isDone ? newTodos[index].isDone = false : newTodos[index].isDone = true;
    setToDoList(newTodos);
  };

  return (
    <div className="App">
      <h1>TO DO</h1>
        {toDoList.map((task) => (
          <div className='app-div'>
            <li style={{ textDecoration: task.isDone ? "line-through" : "" }} key={task.id}>{task.task}</li>
            <button onClick={() => completed(task)}>COMPLETED</button> 
            <span onClick={() => deleteItem(task.id)}>X</span>
          </div>
        ))} 

    <form className='form' onSubmit={handleSubmit}>
        <label>What is need to be done?</label><br/>
        <input value={value} placeholder='write your task!'
        onChange={e => setValue(e.target.value)}
        /> <br/>
        <button type='submit'>ADD</button>
    </form>
    </div>
  );
}

export default App;
