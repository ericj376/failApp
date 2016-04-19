var React = require('react'),

var DropDownCategory= React.createClass({
    getInitialState: function() {
      return {
        value: ""
      }
    },
    handleChange: function(event, index, value) {
      this.props.onCategoryChange(value);
      this.setState({value: value});
    },
    render: function() {
      var actualValues = this.props.category.map(function(e){
        return <MenuItem value={e._id} primaryText={e.name} />
      })
        return (
          
                <SelectField value={this.state.value} onChange={this.handleChange}>
                  { actualValues }
                </SelectField>
            )
    }

});