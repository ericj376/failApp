/*
  Index
    MyPage
      MyPageBox 
        UserInfoData
          UserInfo
        DailyChallengeData
          DailyChallenge
          DailyChallengeDetail
          CompletedChallengesList
            CompletedChallengesCard
*/

var React = require('react');
var CompletedChallengesCard = require('./CompletedChallengesCard');
var Slider = require('react-slick');

var CompletedChallengesList = React.createClass({
  
  render: function(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
    };
      console.log(this.props.user.local.category, "this is CCList")
      var completedFailsArray = !this.props.completedFails ? [] : this.props.completedFails.map(item => {

        return( 
          <div>
            <CompletedChallengesCard card={item} user={this.props.user}  />
          </div>
        )
      })

          
    return (  
      <div className="wrapper">
        <div className="scrolls">
          <div className="imageDiv">
            <Slider {...settings}>
            <prevArrow/>
              { completedFailsArray }
          </Slider>
          </div>
        </div>
      </div>
    )
  }
});



module.exports = CompletedChallengesList;