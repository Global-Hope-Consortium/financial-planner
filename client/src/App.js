import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Plans from './components/Plans';
import Affirmations from './components/Affirmations';
import UnifiedView from './components/UnifiedView';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/plans" component={Plans} />
        <Route path="/affirmations" component={Affirmations} />
        <Route path="/unified-view" component={UnifiedView} />
      </Switch>
    </Router>
  );
};

export default App;