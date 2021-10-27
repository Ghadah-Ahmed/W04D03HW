import React from 'react'

export default function TodoHW() {

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
        <div>
            <h3>TO DO</h3>
            {toDoList.map((task) => (
            <div  key={task.id} className='app-div'>
                <li style={{ textDecoration: task.isDone ? "line-through" : "" }}>{task.task}</li>
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
    )
}
