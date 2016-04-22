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
var MyPageBox = require('./MyPageComps/MyPageBox');

var MyPage = React.createClass({
  render: function() {
    return <MyPageBox />
  }
});

module.exports = MyPage;