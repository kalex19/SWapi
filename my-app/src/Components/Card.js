import React, {Component} from 'react';
import Styles from './Card.scss';
import Icon from ....


export default Card from Component {


//const....
//favorite functionality


render () {
return (
//condoitional rendering depending on what props are passing through
   
<div>
  <div className="cardHeader">
    <img>//people/planets/vehicles icon</img>
    {name}
    <input><img>//favorites icon</img>My Favorite</input>
  </div>
  {info}
</div>

)};


Card.propTypes = {
    title: PropTypes.string,  
    body: PropTypes.string,
    id: PropTypes.number,
    removeIdea: PropTypes.func
  }
}


