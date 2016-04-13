var React = require('react');

var Toggler = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="btn-group" data-toggle="buttons">
          <button onClick={this.props.toggleActiveComp.bind(null, 'fail')} className="btn btn-info">Fail Display</button>
          <button onClick={this.props.toggleActiveComp.bind(null, 'form')} className="btn btn-info">Create New Fail</button>
        </div>
      </div>
    )
  }
});

module.exports = Toggler;