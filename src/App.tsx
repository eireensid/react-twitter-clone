import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { SignIn } from './pages/SignIn'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
