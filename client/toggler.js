var React = require('react');

var Toggler = React.createClass({
  getInitialState: function(){
  return{
    user: null,
  }
 },

 loadUserFromServer: function(){
  
  var self = this;
  $.ajax({
    url: '/getUser',
    method: 'GET'
  }).done(function(data){
    self.setState({ user: data});
  })
 },

 componentDidMount: function(){
  this.loadUserFromServer();
 },
 render: function(){
   if(this.state.user && this.state.user.local && this.state.user.local.role === 'admin'){
    var listDisplay = <i onClick={this.props.toggleActiveComp.bind(null, 'fail')} className="fa fa-lg fa-list-ol" aria-hidden="true"></i>
   } else {
    var listDisplay = null;
   };

   if(this.state.user && this.state.user.local && this.state.user.local.role === 'admin'){
    var newFailForm = <i onClick={this.props.toggleActiveComp.bind(null, 'form')} className="fa fa-lg fa-keyboard-o"aria-hidden="true"></i>
   } else {
    var newFailForm = null;
   };

    return (
      <div className="container toggleBox">
        <div className="btn-group" data-toggle="buttons">
          <div>
            {listDisplay}
            {newFailForm}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Toggler;

     
