var React = require('react');
var Rating = require('react-rating');

function AverageRating(props){
  var rates = props.rates
  var average = rates.reduce((prev, cur) => prev + cur.ratingScale, 0) / rates.length;
  return <Rating readonly={true} initialRate={average}/>
};

AverageRating.propTypes = {
  rates: React.PropTypes.array.isRequired
}    
module.exports = AverageRating;