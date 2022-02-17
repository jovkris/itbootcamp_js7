import './App.css';
// import DeleteUsers from './components/DeleteUSers';
// import GetUsers from './components/GetUsers';
// import PostUsers from './components/PostUsers';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Home, About, Users } from "./views";
import UserContextProvider from './context/UserContext';
import { UserDetails } from './views';

function App() {

  return (
    <div className="App">
      <UserContextProvider>
        {/* <GetUsers />
      <DeleteUsers />
      <PostUsers /> */}

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/about" >About</Link>
              </li>
              <li>
                <Link to="/users" >Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users/:id">
              <UserDetails />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
