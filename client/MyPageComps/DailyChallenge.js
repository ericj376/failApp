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

var DailyChallenge = React.createClass ({
  render: function() {
    return (
      <div>
        <div className="singlefailpost">
          <p>{this.props.oneFail.title}</p>
          <img src={this.props.oneFail.img}/>
          <p>{this.props.oneFail.challenge}</p>
          <p>{this.props.oneFail.ratings}</p>   
        </div>
      </div>
    )
  }
});

module.exports = DailyChallenge;