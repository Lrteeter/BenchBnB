var React = require('react');
var ApiUtil = require('../util/api_util.js');

var BenchForm = React.createClass({
  getInitialState: function() {
    return {lat: '', lng: '', description: '', seating: ''};
  },

  handleLatChange: function(e) {
    this.setState({lat: parseInt(e.target.value)});
  },

  handleLngChange: function(e) {
    this.setState({lng: parseInt(e.target.value)});
  },

  handleDescriptionChange: function(e) {
    this.setState({description: e.target.value});
  },

  handleSeatingChange: function(e) {
    this.setState({seating: parseInt(e.target.value)});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var description = this.state.description;
    var lat = this.state.lat;
    var lng = this.state.lng;
    var seating = this.state.seating;
    var bench = {description: description, lat: lat, lng: lng, seating: seating}
    ApiUtil.createBench({benches: bench});
  },

  render: function () {
    return (
      <form className="benchForm" onSubmit={this.handleSubmit}>
          Latitude:
          <input type="text" onChange={this.handleLatChange} value={this.state.lat}></input>
          <br/>
          Longitude:
          <input type="text" onChange={this.handleLngChange} value={this.state.lng}></input>
          <br/>
          Description:
          <input type="text" onChange={this.handleDescriptionChange} value={this.state.description}></input>
          <br/>
          Seating:
          <input type="text" onChange={this.handleSeatingChange} value={this.state.seating}></input>
          <br/><br/>
          <input type="submit" value="Submit"></input>
        </form>
    );
  },
});

module.exports = BenchForm;
