var React = require('react');

function FailCard(props) {
	return(
		<div className="panel-default">
			<div className="panel-body"><img className="fail-img" src={props.img}/>
				<div className="panel-body">
					{props.title}
					{props.challenge}
					{props.category}
					{props.rating}
					<button onClick={props.getId.bind(null, 'showOne', props.id)} className="btn btn-primary"> View More </button>
					<button onClick={props.getId.bind(null, 'editFail', props.id)} className="btn btn-primary"> Edit </button>
				</div>
			</div>
		</div>
		)
};

module.exports = FailCard;