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
  var customerDisplay = document.querySelector(".customers");

  fetch("https://randomuser.me/api/?nat=us&results=12")
    .then(function(response) {
      response.json().then(function(json) {
        var profiles = json.results;
        var display = document.querySelector(".customers");
        for (let i = 0; i < profiles.length; i++) {
          addCustomer(profiles[i]);
        }
      });
    })
    .catch(function(error) {
      console.log("Fetch Error :-S", err);
    });

  function addCustomer(customer) {
    var profileWrapper = document.createElement("div");
    profileWrapper.classList.add("profile");
    var profilePic = document.createElement("img");
    profilePic.src = customer.picture.large;
    var profileName = document.createElement("h3");
    profileName.innerHTML = customer.name.first + customer.name.last;
    var profileEmail = document.createElement("span");
    profileEmail.innerHTML = customer.email;
    var profileAddress = document.createElement("span");
    profileAddress.innerHTML =
      customer.location.street +
      "<br>" +
      customer.location.city +
      ", " +
      customer.location.state +
      " " +
      customer.location.postcode;
    var profilePhoneNum = document.createElement("span");
    profilePhoneNum.innerHTML = customer.phone;

    profileWrapper.appendChild(profilePic);
    profileWrapper.appendChild(profileName);
    profileWrapper.appendChild(profileEmail);
    profileWrapper.appendChild(profileAddress);
    profileWrapper.appendChild(profilePhoneNum);
    customerDisplay.appendChild(profileWrapper);
  }
})();
