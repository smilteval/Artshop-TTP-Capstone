
import React from 'react';
import './App.css';
import Navbar from './components/NavigationBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Artists from './pages/Artists'
import SingleArtist from './pages/SingleArtist'
import SingleProduct from "./pages/SingleProduct";
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path ='/artists' exact component={Artists} />
          <Route path="/users/:id" component={SingleArtist} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path ="/login" exact component = {Login}/>
          <Route path ="/signup" exact component = {Signup}/>


        </Switch>
      </Router>
    </>
  );
}

export default App;
