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

var UserInfo = React.createClass({
  render: function(){
    var image = this.props.user ? this.props.user.local.image : "";
    var username = this.props.user ? this.props.user.local.username : "";
    return(
      <div>
        <div className="panel-body"><img src={image}/>
        <div>{username}</div>
       </div>
      </div>
      )
  }
});

module.exports = UserInfo; 