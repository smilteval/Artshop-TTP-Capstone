import React from "react";
import "./App.css";
import Navbar from "./components/NavigationBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import SingleArtist from "./pages/SingleArtist";
import SingleProduct from "./pages/SingleProduct";
import Login from './pages/Login';
import PublishArt from "./pages/PublishArt";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage"
import Cart from './pages/Cart';
import Footer from "./components/Footer/Footer";
import Checkout from './pages/Checkout';
import {Redirect} from 'react-router-dom'
import Header  from "./components/Landing/Header"
import TopBar from "./components/Landing/TopBar"
import './index.css'


function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path = "/" exact component = {LandingPage}/>
          <div className="page-container">
            <div className="content-wrap">
          <Navbar />
          <Route path="/home" exact component={Home} />
          <Route path="/artists" exact component={Artists} />
          <Route path="/users/:id" component={SingleArtist} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path ="/login" exact component = {Login}/>
          <Route path="/publish" exact component={PublishArt} />
          <Route path ="/signup" exact component = {Signup}/>
          <Route path ="/cart" exact component = {Cart}/>
          <Route path ="/checkout" exact component = {Checkout}/>
          </div>
          <Footer />
          </div>
        </Switch>

      </Router>


    </>
  );
}
export default App;