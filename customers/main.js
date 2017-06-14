// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

// fetch(url, options).then(function(response) {
//   // handle HTTP response
// }, function(error) {
//   // handle network error
// });

(function() {
  "use strict";
  // Your Code Goes Here
  fetch("https://randomuser.me/api/?nat=us&results=12")
    .then(function(response) {
      response.json().then(function(json) {
        console.log(json);
        var profiles = json.results;
        var display = document.querySelector(".customers");
        for (let i = 0; i < profiles.length; i++) {
          let customer = profiles[i];
          // console.log(customer);
          let profileWrapper = document.createElement("div");
          // display.appendChild(customer);
        }
      });
    })
    .catch(function(error) {
      console.log("Fetch Error :-S", err);
    });
})();
