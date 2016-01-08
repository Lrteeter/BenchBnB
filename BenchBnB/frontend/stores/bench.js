var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');

var _benches = [];
var BenchStore = new Store(AppDispatcher);

BenchStore.all = function () {
  return _benches.slice(0);
}

var resetBenches = function(benches){
  _benches = benches;
}

var addBench = function(bench) {
  _benches.push(bench);
}

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      var result = resetBenches(payload.benches);
      BenchStore.__emitChange();
      break;
    case BenchConstants.BENCH_ADDED:
      var result = addBench(payload.bench);
      BenchStore.__emitChange();
      break;
   }
 };

// window.BenchStore = BenchStore;
module.exports = BenchStore
