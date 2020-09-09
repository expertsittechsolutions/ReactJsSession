import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorldFunc from './components/helloWorld/HelloWorldFunc';
import HelloWorldClass from './components/helloWorld/HelloWorldClass';
import HelloUserFunc from './components/helloUser/HelloUserFunc';
import HelloUserClass from './components/helloUser/HelloUserClass';
import Jsx from './components/jsx/Jsx';
import WelcomeClass from './components/state/WelcomeClass';
import CounterClass from './components/setState/CounterClass';
import FunctionClick from './components/events/FunctionClick';
import ClassClick from './components/events/ClassClick';
import EventBind1 from './components/events/EventBind1';

function App() {
  return (
    <div className="App">
      <EventBind1 />
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <CounterClass /> */}
      {/* <WelcomeClass /> */}
      {/* <Jsx myColor="red" name="Alex" />
      <Jsx myColor="Blue" name="Dali" /> */}
      {/* <HelloUserFunc name="Alex" />
      <HelloUserFunc name="MAx" />
      <HelloUserFunc name="Dali" /> */}

      {/* <HelloUserClass name="Alex"/>
      <HelloUserClass name="MAx" /> */}

      {/* <HelloWorldFunc /> */}

      {/* <HelloWorldClass /> */}
    </div>
  );
}

// // class App extends Component{
// //   render(){
// //     return(
// //       <div className="App">
// //         Hello World from Class Component...!!!
// //       </div>
// //     );
// //   }
// // }

export default App;
