/*
  Index
    MyPage
      MyPageBox 
        UserInfoData
          UserInfo
        DailyChallengeData
          DailyChallenge
          DailyChallengeDetail
        CompletedChallengesData
          CompletedChallengesList
            CompletedChallengesCard
*/

var React = require('react');

var DailyChallengeDetail = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Hello from DailyChallengeDetail</h1>
      </div>
    )
  }
});

module.exports = DailyChallengeDetail;