import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter.js";
import Counters from './components/counterS';

function App() {
  return (
    <div className="my-class">
      {/* {2 + 2} */}
      {/* <Counter /> */}
      <Counters />
    </div>
  );
}

export default App;
