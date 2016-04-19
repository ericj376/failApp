/*
  Index
    MyPage
      MyPageBox 
        UserInfoData
          UserInfo
        DailyChallengeData
          DailyChallenge
        CompletedChallengesData
          CompletedChallengesList
            CompletedChallengesCard
*/

var React = require('react');

var UserInfo = React.createClass({
  render: function(){
    return(
      <div>
        <p>{this.props.user.local.username}</p>
      </div>
      )
  }
});

module.exports = UserInfo; 