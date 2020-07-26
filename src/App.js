import React from 'react';
import './App.css';
import Header from './template/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Switch>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
          <Route path="/grid">
            {/* <About /> */}
          </Route>
          <Route path="/modals">
            {/* <Dashboard /> */}
          </Route>
          <Route path="/counter">
            {/* <Dashboard /> */}
          </Route>
          <Route path="/async">
            {/* <Dashboard /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
