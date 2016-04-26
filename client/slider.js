
var React = require('react');
var ReactSlick = require('react-slick');

var Slider = React.createClass({
 render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <Slider {...settings}>
        <div><h3>boom baby</h3></div>
        <div><h3>boom baby</h3></div>
        <div><h3>boom baby</h3></div>
        <div><h3>boom baby</h3></div>
        <div><h3>boom baby</h3></div>
      </Slider>
   );
 }
});

module.exports = Slider;