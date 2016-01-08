var React = require('react'),
    BenchConstants = require("../constants/bench_constants"),
    BenchStore = require('../stores/bench.js'),
    ApiUtil = require('../util/api_util.js'),
    BenchForm = require('./bench_form.jsx');

var Index = React.createClass({

  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    BenchStore.addListener(this._onChange);
  },

  render: function () {
    var idx = 0;
    return (
      <div>
        <ul>
          {this.state.benches.map(function (bench) {
            {idx += 1;}
            return <li key={idx}>{bench.description}</li>;
          })}
        </ul>
        <BenchForm/>
      </div>
   );
  },

  _onChange: function () {
    this.setState({benches: BenchStore.all()});
  }
});

module.exports = Index;
