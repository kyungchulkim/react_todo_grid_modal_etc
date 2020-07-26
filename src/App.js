import React from 'react';
import './App.css';
import Header from './template/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AsyncPage from './template/async/AsyncPage';
import CounterPage from './template/counter/CounterPage';
import TodoPage from './template/todo/TodoPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Switch>
          <Route exact path="/">
            <TodoPage />
          </Route>
          <Route path="/grid">
            {/* <About /> */}
          </Route>
          <Route path="/modals">
            {/* <Dashboard /> */}
          </Route>
          <Route path="/counter">
            <CounterPage />
          </Route>
          <Route path="/async">
            <AsyncPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
