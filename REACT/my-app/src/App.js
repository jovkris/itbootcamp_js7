import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter.js";
import Counters from './components/counterS';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="my-class" >
        {/* {2 + 2} */}
        {/* <Counter /> */}
        <Navbar />
        < Counters />
      </div >
    );
  }
}

export default App;
