import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Dishes} from "./dishes"

class Menu extends React.Component
{
  constructor (props)
  {
    super (props);
  }
  
  static getGroups ()
  {
    let foodGroups = [];
    
    for (let i = 0, j = 0; i < Dishes.length; i++)
    {
      for (j = 0; j < foodGroups.length; j++)
      {
        if (foodGroups[j] === Dishes[i].group)
        {
          break;
        }

      }
      
      if (j === foodGroups.length)
      {
        foodGroups.push (Dishes[i].group);
      }
    }
    
    return foodGroups;
  }
  
  renderDishes ()
  {
    let sortedDishes = [];
    let foodGroups = Menu.getGroups();
    
    for (let i = 0; i < foodGroups.length; i++)
    {
      sortedDishes.push ( <FoodGroup name={foodGroups[i]} /> );
      for (let j = 0; j < Dishes.length; j++)
      {
        if (foodGroups[i] === Dishes[j].group)
        {
          sortedDishes.push ( (<Dish  {...Dishes[j]} />) );
        }
      }
    }
    
    return sortedDishes;
  }
  
  render()
  {
    
    
    return (
      <div id="menu">
        <nav>
          <Navbar />
        </nav>
        <h1 id="resto-name">Le Bellisima Italia</h1>
        {this.renderDishes()}
      </div>
    );
  }
}

function Navbar (props)
{
  let navbar = [];
    
  navbar = Menu.getGroups().map ( (item) => (<a key={item} className="nav-element" href={"#" + item}>{item}</a>) );

  return (
    <div id="navbar-fixed">
      <div id="navbar">
        <div id="div-resto-nav">
          <p id="resto-nav">Le Bellisima Italia</p>
        </div>
        <div id="navbar-anchors">
          {navbar} 
        </div>
      </div>
    </div>
  );
}

function FoodGroup (props)
{
  return (
    <h1 id={props.name} className="group-title" >{props.name}</h1>
  );
}


function Dish (props)
{
  return (
    <div className="dish-div">
      <div className="div-name">
      <h2 className="dish-name">{props.name}</h2>
      </div>
      <div className="div-description">
        <p className="dish-description">{props.description}</p>
      </div>
      <div className="div-price">
        <p className="dish-price">{"$" + props.price.toString() }</p>
      </div>
      <div className="div-img">
        <img className="dish-image" src={props.image} alt={"Image of " + props.name} />
      </div>
    </div>
  );
}

ReactDOM.render( <Menu />,  document.getElementById('root'));


