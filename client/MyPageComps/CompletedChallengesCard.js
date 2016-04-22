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

function CompletedChallengesCard(props) {
console.log(props.title, "this is CompletedChallengesCard");
  return(
    <div className="card card-size">
      <div className="card-body"><img className="fail-img" src=""/>
        <div className="card-body card-flex">

          <div className="titlePosition">
            <p>{props.title}</p>
          </div>

          <div className="textPosition">
            <p>this is the main content</p>
          </div>
 
        </div>
      </div>
    </div>
  )
};


module.exports = CompletedChallengesCard;