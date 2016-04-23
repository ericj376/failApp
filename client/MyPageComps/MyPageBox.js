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
var UserInfoData = require('./UserInfoData');
var DailyChallengeData = require('./DailyChallengeData');

var MyPageBox = React.createClass({
  render: function(){
    return (
      <div>
        <UserInfoData /> 
        <DailyChallengeData />
      </div>
    )
  }
});

module.exports = MyPageBox;