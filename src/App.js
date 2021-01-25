import React from 'react';
import './App.css';
import Navbar from './components/NavigationBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Artists from './pages/Artists'
// import Reports from './pages/Reports';
// import Products from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path ='/artists' exact component={Artists} />
          {/* <Route path='/reports' component={Reports} /> */}
          {/* <Route path='/products' component={Products} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;