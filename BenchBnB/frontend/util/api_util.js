var ApiActions = require("../actions/api_actions.js")

var ApiUtil = {
  fetchBenches: function(benches){
    $.ajax({
      url: "/api/benches",
      // data: benches,
      success: function(benches){
        ApiActions.receiveAll(benches);
      },
      // dataType: Array
    });
  },

  createBench: function(bench) {
    $.ajax({
      type: "POST",
      url: "api/benches",
      data: bench,
      success: function(bench){
        ApiActions.addBench(bench);
      },
      error: function(errormessage){
      }
    });
  }
};

// window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
