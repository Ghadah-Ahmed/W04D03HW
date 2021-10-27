import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Temperature from './Temperature';
import TodoHW from './TodoHW';
import W04D04HW from './W04D04HW';

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


  return (
    <div className="App">
      <h1 className='big-title'> MY HOMEWORKS AND LABS</h1>
      <h2>Todo HW:</h2>
      <TodoHW/>
      <br/><br/> <hr/> 

      <h2>Temperature Lab:</h2>
      <Temperature/>
      <br/><br/> <hr/> 

      <h2> useState, useEffect, axios:</h2>
      <W04D04HW/>
      <br/><br/> <hr/> 
    </div>
  );
}

export default App;
