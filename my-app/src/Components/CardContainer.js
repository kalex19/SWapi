import React, {Component} from 'react';
import Styles from './CardContainer.scss';
import ScrollText from './ScrollText.js';
import ErrorMessage from './ErrorMessage.js';
import Card from './Card.js'

export default CardContainer from Component {

//const...
//functionality or conitional rendering?
//possibly functionality to pick random film

render () {
  return(
<main>
  <ScrollText film={this.props.film}/> /displayed while other data is loading?? goes away and cards are displayed</main>/
if no favorites ....<ErrorMessage />
if people btn.... create <Card people={this.props.people}
if planets btn.... create <Card planets={this.props.planets}
if vehicles btn.... create <Card vehicles={this.props.vehicle}

</main>

  )};


  CardContainer.propTypes = {
    film: PropTypes.object,
    people: PropTypes.array,  
    planets: PropTypes.array,
    vehicles: PropTypes.array,
    //removeIdea: PropTypes.func
  }
}

