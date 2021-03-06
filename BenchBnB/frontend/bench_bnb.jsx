var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Search = require('./components/search.jsx');
var BenchForm = require('./components/bench_form.jsx');

var App = React.createClass({
  render: function(){
    return (
        <div>
          <header><h1>Bench BnB</h1></header>
          {this.props.children}
        </div>
    );
  }
});
var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
      <Route path="benches/new" component={BenchForm}/>
    </Route>
);
document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  ReactDOM.render(<Router>{routes}</Router>, root);
});
