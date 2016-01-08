var React = require('react'),
    BenchConstants = require("../constants/bench_constants"),
    BenchStore = require('../stores/bench.js'),
    Map = require('./map.jsx'),
    Index = require('./index.jsx'),
    ApiUtil = require('../util/api_util.js');

var Search = React.createClass({

  render: function () {
    return (
      <div>
        <Map/>
        <Index/>
      </div>
    );
  },
});

module.exports = Search;
