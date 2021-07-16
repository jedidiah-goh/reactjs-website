import React from 'react';
import logo from './logo.svg';
import background from './background.jpg';
import background2 from './713pIkbEsTZus.jpg-0.jpg'; 
import fastfood from './fast-food-banner.jpg';
import stick from './mozzarella-cheese-sticks.jpg';
import './App.css';
import Button from './buttons';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";  
import blank from "./blank";
import {Link, NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


class Navbar extends React.Component{
  render() {
    return(
      <Router>
    <div class="topnav padding16">
      <div id="left">
<Link to="/blank" className="button">Company logo</Link> 
</div>
<div id="right"> 
<a href="index.php" className="button " >HOME</a> 
<a href="blank" className="button " >MENU</a> 
<a href="blank" className="button " >ABOUT</a> 
<a href="blank" className="button " >CHECKOUT</a>
<a href="blank" className="button " >LOGIN</a> 
<input type="text" className="searchpad" placeholder="Search..">
</input>
</div>
    </div>
    </Router>
    );
  }
}


function click() {

  function MouseOver(event) {
    event.target.style.background = 'lightskyblue';
  }
  function MouseOut(event){
    event.target.style.background="";
  }
}



class App extends React.Component {
  render () {
  return (
    <div className='App'>
        

        
     <div id ="header">
 <Navbar bg="light" className="topnav padding16"id="right"> 
<div id="left">
<a href="blank" className="button">Company logo</a> 
</div>
<div id="right"> 
<a href="index.php" className="button " >HOME</a> 
<a href="blank" className="button " >MENU</a> 
<a href="blank" className="button " >ABOUT</a>
<a href="blank" className="button " >CHECKOUT</a>
<a href="blank" className="button " >LOGIN</a> 
<input type="text" className="searchpad" placeholder="Search..">
</input>
</div>
</Navbar> 
</div>

<a href="blank">
    <img class="banner"></img>
    <div class="bannerpad">
    <img src={background} alt="Food banner" height="200" width="500"></img>
    <img src={background2} alt="Food banner" height="200" width="200"></img>
    <img src={fastfood} alt="Food banner" height="200" width="750"></img>
    </div>
     </a>
    <div className="click">  <a href="blank">
     <button   class="menubutton">Pizza</button>
     <button class="menubutton">Pasta</button>
     <button class="menubutton">Western</button>
     <button class="menubutton">Japanese</button>
     <button class="menubutton">Korean</button>
     <button class="menubutton">Chinese</button>
     <button class="menubutton">Starters</button>
     <button class="menubutton">Sides</button>
     <button class="menubutton">Desserts</button>
     <button class="menubutton">Drinks</button>
     </a>
</div>

<h1 class="left">Popular choice</h1>
<div>
<a href="blank">
     <button class="menubutton"><div>Cheese Sticks</div> <div><img src={stick} alt="cheese sticks" height="90" width="140"></img></div>$4.50</button>
     <button class="menubutton"><div>Cheese Sticks</div> <div><img src={stick} alt="cheese sticks" height="90" width="140"></img></div>$4.50</button>
     <button class="menubutton"><div>Cheese Sticks</div> <div><img src={stick} alt="cheese sticks" height="90" width="140"></img></div>$4.50</button>
     </a>
</div>
<h1 class="left">Best value</h1>
<div>
<a href="/blank">
     <button class="menubutton"><div>Cheese Sticks</div> <div><img src={stick} alt="cheese sticks" height="90" width="140"></img></div>$4.50</button>
     <button class="menubutton"><div>Cheese Sticks</div> <div><img src={stick} alt="cheese sticks" height="90" width="140"></img></div>$4.50</button>
     <button class="menubutton"><div>Cheese Sticks</div> <div><img src={stick} alt="cheese sticks" height="90" width="140"></img></div>$4.50</button>
     </a>
</div>
<h1 class="left">Starters</h1>
<div class="bannerpad">

<a href="/blank">
  
     <button class="menubutton"><div>Cheese Sticks</div> <div><img src={stick} alt="cheese sticks" height="90" width="140"></img></div>$4.50</button>
     <button class="menubutton"><div>Cheese Sticks</div> <div><img src={stick} alt="cheese sticks" height="90" width="140"></img></div>$4.50</button>
     <button class="menubutton"><div>Cheese Sticks</div> <div><img src={stick} alt="cheese sticks" height="90" width="140"></img></div>$4.50</button>
     </a>
</div>


<footer class="topnav padding16">
    <span ><div class="left"><a href="index.php" id="left" class="button left">Company logo</a></div>
     <p class="center">Delivery Hotline: 94839824</p></span>
</footer>

</div>
     

    );
  }
}
export default App;
