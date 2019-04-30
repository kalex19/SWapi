import React, {Component} from 'react';
import React from 'react';
import Styles from './App.scss';
import Header from '.Header.js';
import Controls from '.Control.js';
import CardContainer from '.CardContainer.js';

export default class App extends Component {
  constructor()
    super() 
      this.state = {
        film: {},
        people: [],
        planets: [],
        vehicles: [],
        Favorites: [],
        Error: true,
        Category: null
      }
//async
 ComponentDidMount() {

}

//fetch calls

//local storage

render() {
  return (
    <div className="App">
      <Header/>
      <Controls  people={this.people} planets={this.planets} vehicles={this.vehicles}/>
      <CardContainer people={this.people} planets={this.planets} vehicles={this.vehicles} favorites={this.favorites} error={this.error}/>
    </div>
  );

}

//proptypes
}



