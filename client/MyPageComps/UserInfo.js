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
      <div className="jumbotron userContainer">
        <div className="userNameText">Welcome to Your Personal Page {username}!</div>
        <div><img className="userImage" src={image}/>
        </div>
      </div>
      )
  }
});

module.exports = UserInfo; 

