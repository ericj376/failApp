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

var CompletedChallengesList = React.createClass({
  
  render: function(){
    
      var completedFailsArray = this.props.completedFails.map(item => {
        return( 
          <CompletedChallengesCard img={item.img} challenge={item.challenge} title={item.title} ratingScale={this.props.ratingScale}/>
        )
      })

    return (
      <div>
        { completedFailsArray }
      </div>
    )
  }
});


module.exports = CompletedChallengesList;