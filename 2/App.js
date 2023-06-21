import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllTrainsPage from './components/AllTrainsPage';
import SingleTrainPage from './components/SingleTrainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllTrainsPage} />
        <Route exact path="/train/:id" component={SingleTrainPage} />
      </Switch>
    </Router>
  );
}

export default App;
