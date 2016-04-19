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
        <div className="panel-body"><img src={this.props.user.local.image}/>
        <div>{this.props.user.local.username}</div>
       </div>
      </div>
      )
  }
});

module.exports = UserInfo; 