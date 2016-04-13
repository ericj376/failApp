var React = require('react');
var FailCard = require('./FailCard');


function FailList(props) {
		//map through data and pass it to Fail card; 
		var failList = props.failArray.map(item => {
			return(
			    <FailCard
			    getId = { props.getId }
			    id = { item._id }
					title = { item.title }
					challenge = { item.challenge } 
					rating = { item.rating }
					img = { item.img }
					category = { item.category }
					rating = { item.rating }
					comment = { item.comment } />
				);
		})
		return (
			<div className="fail-flex">
				{ failList }
			</div>	
			)
	}

FailList.propTypes = {
	failArray: React.PropTypes.array.isRequired
};

module.exports = FailList;