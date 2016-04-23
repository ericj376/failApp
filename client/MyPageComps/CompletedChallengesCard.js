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
var Rating = require('react-rating');


function CompletedChallengesCard(props) {
  var categoryName = props.category ? props.category.name : "no category";


  return(
    <div className="card card-size">
      <div className="card-flex">
      <div className="card-body"><img className="fail-img" src={props.img}/>
        <div className="categoryBox">
          <p className="categoryText">{categoryName}</p>
        </div>
        <i className="fa fa-lg fa-binoculars viewSpace" aria-hidden="true"></i>
        
        <div className="container opacityBox">
        </div>
        <div className="ratingBox-flex">
          <Rating placeholderRate={props.ratingScale}/>
        </div>
        <p id="titlePosition">{props.title}</p>          
        <p id="challengePosition">{props.challenge}</p>  

        </div>
      </div>
    </div>
  )
};


module.exports = CompletedChallengesCard;