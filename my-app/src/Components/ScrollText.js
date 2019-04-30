import React, {Component} from 'react';
import Styles from './ScrollText.scss';


export default ScrollText from Component {


//const...
 //get movie info functionality

 //const Hello = ({name}) => <div>Hello {name}</div>
render () {
return(
  <div>
    {scrollText} //may change depending on the film selected
    {movieTitle}
    {movieReleasedate}
  </div>
)};

ScrollText.propTypes = {
    scrollText: PropTypes.string,
    moveiTitle: PropTypes.string,
    movieReleaseDate: PropTypes.string,
    //removeIdea: PropTypes.func
  }

}

