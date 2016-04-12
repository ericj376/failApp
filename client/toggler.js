var React = require('react');

var Toggler = React.createClass({
  render() {
    const {toggleActiveComp} = this.props;
    return (
      <div className="container">
        <div className="btn-group" data-toggle="buttons">
          <button onClick={ () => toggleActiveComp('fail') } className="btn btn-info">Fail Display</button>
          <button onClick={ () => toggleActiveComp('form') } className="btn btn-info">Create New Fail</button>
        </div>
      </div>
    )
  }
});

module.exports = Toggler;