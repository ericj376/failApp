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
var UserInfoData = require('./UserInfoData');

var MyPageBox = React.createClass({
  render: function(){
    return <UserInfoData/>
  }
});

module.exports = MyPageBox;