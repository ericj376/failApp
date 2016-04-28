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
  
  var usersRating = getRating(props.card.ratings, props.user);


  return(
    <div className="card card-size">
      <div className="card-flex">
      <div className="card-body"><img className="fail-img" src={props.card ? props.card.img : ''}/>
        <div className="categoryBox">
          <p className="categoryText">{props.user.local.category.name}</p>
        </div>        
        <div className="container opacityBox">
        </div>
        <div className="ratingBox-flex">
          <Rating readonly={true} placeholderRate={usersRating}/>
        </div>
        <p id="titlePosition">{props.card ? props.card.title : ''}</p>          
        <p id="challengePosition">{props.card ? props.card.challenge : ''}</p>  

        </div>
      </div>
    </div>
  )
};


function getRating(ratings, user) {
  console.log(user, user._id, "this is CCCard")
  var rating = 0;
  for(var i = 0; i < ratings.length; i++) {
    rating = ratings[i].user.toString() === user._id.toString() ? ratings[i].ratingScale : rating;
  }
  return rating;
};

module.exports = CompletedChallengesCard;
