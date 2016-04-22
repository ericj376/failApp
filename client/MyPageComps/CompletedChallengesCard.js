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
  return(
    <div className="card card-size">
      <div className="card-body"><img className="fail-img" src={props.img}/>
        <div className="card-body card-flex">

          <div className="titlePosition">
            <p>{props.title}</p>
          </div>

          <div className="textPosition">
            <p>{props.challenge}</p>
          </div>
 
        </div>
      </div>
    </div>
  )
};


module.exports = CompletedChallengesCard;