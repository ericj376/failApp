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


var DailyChallenge = React.createClass ({
  render: function() {
    if(!this.props.oneFail) {
      return(
        <div className="card card-size">
          <div className="card-flex">
            <div className="card-body"><img className="fail-img" src="http://worldartsme.com/images/your-awesome-clipart-1.jpg"/>
              <p>Congrats on finishing all challenges!!!!</p>            
            </div>
          </div>
        </div>      
        )
    } else {
      var categoryName = this.props.oneFail.category ? this.props.oneFail.category.name : "no category";
      return (
        <div className="card card-size">
          <div className="card-flex">
            <div className="card-body"><img className="fail-img" src={this.props.oneFail.img}/>
              <div className="categoryBox">
                <p className="categoryText">{categoryName}</p>
              </div>
              <i onClick={this.props.getId.bind(null, 'showOne', this.props.id)} className="fa fa-lg fa-binoculars viewSpace" aria-hidden="true"></i>
              <div className="container opacityBox">
              </div>
              <div className="ratingBox-flex">
                <Rating onClick={this.props.updateRate} initialRate={0} placeholderRate={this.props.ratingScale} />
              </div>
              <p id="titlePosition">{this.props.oneFail.title}</p>          
              <p id="challengePosition">{this.props.oneFail.challenge}</p> 
              <div className="container opacityButton">
              </div>
              <div>
                <button onClick={this.props.submitCompletedDailyChallenge.bind(null, this.props.id)} className="btnSpace"> Fail Challenge Done? Click Here! </button>
              </div>  
            </div>
          </div>
        </div>      
    ) 
    }       
   }
 });

module.exports = DailyChallenge;

