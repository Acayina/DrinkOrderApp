// initialize order count (Worksheet Part 1: Step 9a)
var orderCount = 0;

/* array of drink objects (Worksheet Part 2: Step 1)
   each object has a value key with a camelCase drink name value 
   and a label key with the display text for the drink */
var cocktails = [
  {
    'id': 'focusedLady',
    'label': 'Focused Lady'
  },
  {
    'id': 'strongLady',
    'label': 'Strong Lady'
  },
  {
    'id': 'frontEndPunch',
    'label': 'Front-End Punch'
  },
  {
    'id': 'cachedOut',
    'label': 'Cached Out'
  },
  {
    'id': 'httPapaya',
    'label': 'httPAPAYA://'
  },
  {
    'id': 'nerdyDaiquiri',
    'label': 'Nerdy Daiquiri'
  },
  {
    'id': 'theAvernaCode',
    'label': 'The Averna Code'
  },
  {
    'id': 'focusedTheMostest',
    'label': 'Focused the Mostest'
  },
];

// loadMenu function to add the drinks from the array to the page (Worksheet Part 2: Step 2)
var loadMenu = function() {
  for (var i = 0; i < cocktails.length; i++) {
    $('.radio-group').append(
      '<label class="radio" for="' + cocktails[i].id + '"><input type="radio" id="' + cocktails[i].id + '" name="drink" value="' + cocktails[i].label + '">' + cocktails[i].label + '</label>'
    );
  }
};

/* submitOrder function that increments orderCount, gathers and displays order details.
   (Worksheet Part 1: Step 3) */
var submitOrder = function() {
  orderCount++;
  var orderName = $("#order-form-input").val();
  console.log(orderName);
  var drinkName = $("input[type='radio']:checked").val();
  
  // only add the order if a name has been entered (Worksheet Bonus Section: Step 2)
  if (orderName) {
    // only add orders if there is room left on the order queue (Worksheet Part 1: Step 9g)
    if (orderCount <= 5) {
      // add order display (Worksheet Part 1: Step 7)
      $("#order-details").append("<h1>" + orderName + " would like a " + drinkName + "</h1>");

      // call funciton to update drink order count (Worksheet Part 1: Step 9e)
      updateOrderCount(orderCount);
    }
    else {
      alert('Drink order queue is full.  Please try ordering again in a few minutes.');
    }
  }
  else { // if orderName has no value trigger an alert (Worksheet Bonus Section: Step 3)
    alert('Oops! Please enter your name to order your drink.');
  }
};

// updateOrderCount function with a parameter passed to it (Worksheet Part 1: Step 9c)
var updateOrderCount = function(count) { 
  $('#drink-count').html("Drinks Ordered: " + count); 
}


$(document).ready(function() {
  // call loadMenu function (Worksheet Part 2: Step 2d)
  loadMenu();

  $('#order-btn').click(function() {
    // call submitOrder function when order button is clicked (Worksheet Part 1: Step 5b)
    submitOrder();
  });
});