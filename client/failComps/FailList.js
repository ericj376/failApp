/*
Index
  Fail Box
    Fail List Data
      Fail List
        Fail Card
      Single Fail Card Data
        Single Fail Card
          Comment List
            Comment Form Data
              Comment Form
            Comment Card
            Edit Comment Card Data
              Edit Comment Card
    Edit Fail Card Data
      Edit Fail Card Form
    Fail Form Data
      Fail Form
*/


var React = require('react');
var FailCard = require('./FailCard');
var Slider = require('react-slick');

var FailList = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
    };
    var allFails = this.props.failArray.map(item => {
			return(
			    <div>
            <FailCard
              user = {this.props.user}
  				    getId = { this.props.getId }
  	          deleteSingleFail={ this.props.deleteSingleFail }
  				    id = { item._id }
  						title = { item.title }
  						challenge = { item.challenge } 
  						rating = { item.rating }
  						img = { item.img }
  						category = { item.category }
  	          average = { this.props.getAverage(item.ratings) } />
          </div>
	  	)
		});
  
    return (
      <div className="wrapper">
        <div className="scrolls">
          <div className="imageDiv">
    	      <Slider {...settings}>
            <prevArrow/>
    	        {allFails}
    	      </Slider>
          </div>
  	    </div>
      </div>
   );
  }
});


module.exports = FailList;