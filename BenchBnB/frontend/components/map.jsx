var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchConstants = require("../constants/bench_constants"),
    BenchStore = require('../stores/bench.js'),
    ApiUtil = require('../util/api_util.js');

var map;
var pos;

var Map = React.createClass({
  componentDidMount: function(){
    BenchStore.addListener(this._onChange);

    map = ReactDOM.findDOMNode(this.refs.map);
    pos = new google.maps.LatLng(37.7758, -122.3);
    var mapOptions = {
      center: pos,
      zoom: 10
    };
    map = new google.maps.Map(map, mapOptions);
    map.addListener('idle', this.mapIdle);
  },

  mapIdle: function() {
    var bounds = map.getBounds();
    var north = bounds.getNorthEast().lat();
    var south = bounds.getSouthWest().lat();
    var east = bounds.getSouthWest().lng();
    var west = bounds.getNorthEast().lng();

    var benchesArr = BenchStore.all();
    var benchesInBound = [];
    for (var i = 0; i < benchesArr.length; i++) {
      if (benchesArr[i].lat > south && benchesArr[i].lat < north
          && benchesArr[i].lng < west && benchesArr[i].lng > east) {
            benchesInBound.push(benchesArr[i]);
      }
    };

    ApiUtil.fetchBenches(benchesInBound);
  },

  _onChange: function () {
    benches = BenchStore.all();

    var marker;
    for (var i = 0; i < benches.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(benches[i].lat, benches[i].lng),
        title: 'bench!'
      });
      marker.setMap(map);
    }
  },

  render: function () {
    return (
      <div className="map" ref="map"/>
   );
  },
});

module.exports = Map;
