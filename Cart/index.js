function updateTotal() {
    var totalQuantity = 0;
    var totalPrice = 0;
  
    // Loop through all the items and calculate the total quantity and price
    var items = document.getElementsByName("item");
    var prices = document.getElementsByName("pricetxt");
    for (var i = 0; i < items.length; i++) {
      totalQuantity += parseInt(items[i].value);
      totalPrice += parseInt(items[i].value) * parseFloat(prices[i].value.replace(",", ""));
    }
  
    // Update the total quantity and price elements
    document.querySelector(".totalquan").textContent = totalQuantity;
    document.querySelector(".totalAmount").textContent = totalPrice.toLocaleString("en-US", {minimumFractionDigits: 2});
  }
  
  // Add an event listener to all plus and minus buttons
  var buttons = document.querySelectorAll(".bi-bag-plus-fill, .bi-bag-dash");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
      // Find the input element next to the plus or minus button
      var input = event.target.parentElement.querySelector("input[name='item']");
  
      if (event.target.classList.contains("bi-bag-plus-fill")) {
        // Increment the input value by 1 if the plus button was clicked
        input.value = parseInt(input.value) + 1;
      } else if (event.target.classList.contains("bi-bag-dash")) {
        // Decrement the input value by 1 if the minus button was clicked and the value is greater than 0
        if (parseInt(input.value) > 0) {
          input.value = parseInt(input.value) - 1;
        }
      }
  
      // Update the total quantity and price
      updateTotal();
    });
  }
  