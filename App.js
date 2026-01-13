import React from 'react';
import Styles'./styles.css';
import {Router, Switch, Redirect} from 
'react-router-dom';
import Home from './home.jsx';
import Contact from './Contect.jsx';
import About from './about.jsx';
import Services from './Services.jsx';
import Navbar from './Navbar.jsx';
import Navbar from './Navbar.js';

const App = () => {
return (
<>
  <Switch> 
  <Router exact path="/" component={Home} />
  <Router exact path="/contact" component={Contact} />
  <Router exact path="/about" component={About} />
  <Router exact path="/services" component={Services} />
  <Redirect to "/"; />
  </Switch> 
  </>
);
}

export defualt App;


