var AppDispatcher = require("../dispatcher/dispatcher.js"),
    BenchConstants = require("../constants/bench_constants.js");

var ApiActions = {

  receiveAll: function(benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  addBench: function(bench) {
    //console.log(bench)
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_ADDED,
      bench: bench
    })
  }

};

module.exports = ApiActions
