import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './components/Inicio.js/index.js';
import Comprar from './components/Comprar.js';
import Login from './components/Login.js/index.js';
import Register from './components/Register.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/comprar" component={Comprar} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
