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

var CompletedChallengesList = React.createClass({
  render: function(){

    return(
      <div>
        <h1> hello from CompletedChallengesList</h1>
      </div>
    )
  }
});

module.exports = CompletedChallengesList;