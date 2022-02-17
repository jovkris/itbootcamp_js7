import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Counter1 from './components/Counter1';
import { useState } from 'react';
import Select from './components/Select';
import SongList from './components/SongList';
import NewSongForm from './components/NewSongForm';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* {
        show ? <Counter1 /> : null
      }
      <button onClick={() => { setShow(!show) }}>toggle show</button>
      <Counter1 /> */}

      {/* <Select /> */}

      <SongList />


    </div>
  );
}

export default App;
