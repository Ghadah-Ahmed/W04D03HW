import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Temperature from './Temperature';
import TodoHW from './TodoHW';
import W04D04HW from './W04D04HW';
import UseEffectLab from './useEffectLab';
import AxoisLab from './AxoisLab';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UseContextLab from './UseContextLab';

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
    <Router>
      <div className="App">
      <h1 className='big-title'> MY HOMEWORKS AND LABS</h1>
          <ul className='nav'>
              <li><Link to="/TodoHW">TodoHW</Link></li>
              <li><Link to="/Temperature">Temperature</Link></li>
              <li><Link to="/useEffectLab">UseEffectLab</Link></li>
              <li><Link to="/W04D04HW">W04D04HW</Link></li>
              <li><Link to="/AxoisLab">AxoisLab</Link></li>
              <li><Link to="/UseContextLab">UseContextLab</Link></li>
          </ul>
               <br/><br/> <hr/> 
          <Switch>
            <div className='switch-div'>
              <Route path="/TodoHW"><TodoHW /></Route>
              <Route path="/Temperature"><Temperature /></Route>
              <Route path="/useEffectLab"><UseEffectLab /></Route>
              <Route path="/W04D04HW"><W04D04HW /></Route>
              <Route path="/AxoisLab"><AxoisLab /></Route>
              <Route path="/UseContextLab"><UseContextLab/></Route>

            </div>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
