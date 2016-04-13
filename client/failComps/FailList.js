/*
Index
  Fail Box
    Fail List Data
      Fail List
        Fail Card
    Edit Fail Card Data
      Edit Fail Card Form
    Fail Form Data
      Fail Form
    Single Fail Card Data
      Single Fail Card
        Comment Form Data
          Comment Form
        Comment List
          Comment Card
*/


var React = require('react');
var FailCard = require('./FailCard');


function FailList(props) {
		//map through data and pass it to Fail card; 
		console.log(props.failArray);
		var allFails = props.failArray.map(item => {
			return(
			    <FailCard
			    getId = { props.getId }
			    id = { item._id }
					title = { item.title }
					challenge = { item.challenge } 
					rating = { item.rating }
					img = { item.img }
					category = { item.category }
					rating = { item.rating } />
				);
		})
		return (
			<div className="fail-flex">
				{ allFails }
			</div>	
			)
	};

FailList.propTypes = {
	failArray: React.PropTypes.array.isRequired
};

module.exports = FailList;