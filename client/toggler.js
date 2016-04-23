var React = require('react');

var Toggler = React.createClass({
  render: function(){
    return (
      <div className="container toggleBox">
        <div className="btn-group" data-toggle="buttons">
          <i onClick={this.props.toggleActiveComp.bind(null, 'fail')} className="fa fa-lg fa-list-ol" aria-hidden="true"></i>
          <i onClick={this.props.toggleActiveComp.bind(null, 'form')} className="fa fa-lg fa-keyboard-o"aria-hidden="true"></i>
        </div>
      </div>
    )
  }
});

module.exports = Toggler;

     
