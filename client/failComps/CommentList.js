/*
Index
  Fail Box
    Fail List Data
      Fail List
        Fail Card
      Single Fail Card Data
        Single Fail Card
          Comment List
            Comment Form Data
              Comment Form
            Comment Card
            Edit Comment Card Data
              Edit Comment Card
    Edit Fail Card Data
      Edit Fail Card Form
    Fail Form Data
      Fail Form
*/

var React = require('react');
var CommentCard = require('./CommentCard');
var EditCommentCardData = require('./EditCommentCardData');
var CommentFormData = require('./CommentFormData');

var CommentList = React.createClass({
    getInitialState: function(){
      return{
        activeComponent: "commentCard",
        activeCommentId: null,
        userLocal: null,
      }
    },
    loadUserFromServer: function(){
    var self = this;
    $.ajax({
      url: '/getUser',
      method: 'GET'
    }).done(function(data){
      self.setState({ userLocal: data});
    })
   },
    getId: function(type, id){
      if(type === 'showOneComment'){
        return this.setState({ activeCommentId: id, activeComponent: 'commentCard'})
      } else if (type === 'editOneComment'){
        return this.setState({ activeCommentId: id, activeComponent: 'editComment'})
      } else {
        return null
      }
    },
    showComp: function(){
      /*show comment card or edit comment card data*/
      
      if(this.state.activeComponent === 'commentCard'){
        return this.showCommentCard();
      } else if (this.state.activeComponent === 'editComment'){
        return  <EditCommentCardData loadOneFailFromServer={ this.props.loadOneFailFromServer } id={this.state.activeCommentId} failId={this.props.failId} toggleActiveComp={this.toggleActiveComp}/>
      }
    },
    toggleActiveComp: function(name){
      this.setState({activeComponent: name})
      },
    componentDidMount: function(){
      this.loadUserFromServer();
    },
    showCommentCard: function(){
      var self = this;

      var comments = this.props.commentsArray.map(function(c){
        var userName = c.user && c.user.local ? c.user.local.username : "no user";
        var userId = c.user ? c.user._id : "no user";


        var b = c.body ? c.body : null;
        return(
          <div>
           <CommentCard userId={userId} userLocal={self.state.userLocal} body={b} date={c.date.substr(0,10)} username={userName} id={c._id} deleteComment={ self.props.deleteComment } getId={self.getId} toggleActiveComp={self.toggleActiveComp}/> 
          </div>
        )
      });
      return(
        <div>
          { comments }
          <CommentFormData userLocal={this.state.userLocal} loadOneFailFromServer={ this.props.loadOneFailFromServer } failId={this.props.failId} />
        </div>
      )
    },
    render: function(){
      return this.showComp(); 
    },
});

module.exports = CommentList;



