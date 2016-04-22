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
          <CompletedChallengesCard title={item.title} />
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