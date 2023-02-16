function onSubmit(){

// var carddetails = document.getElementById("name-3");
// console.log("Card info", carddetails)

}

// // Create a Stripe client
// var stripe = Stripe('pk_test_51MZy8TSGOJPd1sa9jLfI9tXFj3vb37UqWrQ4k3xEc2Zg57VK4XjcNrozunRJJwcQUQyccF7N14RfnMNi0nTuaLzU00jGacoMhi');

// // Create an instance of Elements
// var elements = stripe.elements();

// // Custom styling can be passed to options when creating an Element.
// var style = {
//   base: {
//     // Add your base input styles here
//     fontSize: '16px',
//           color: '#32325d',
//   }
// };

// // Create an instance of the card Element
// var card = elements.create('card', {style: style});

// // Add an instance of the card Element into the `card-element` <div>
// card.mount('#card-element');

// // Handle real-time validation errors from the card Element
// card.addEventListener('change', function(event) {
//   var displayError = document.getElementById('card-errors');
//   if (event.error) {
//     displayError.textContent = event.error.message;
//   } else {
//     displayError.textContent = '';
//   }
// });

// // Handle form submission
// document.getElementById('payment-form').addEventListener('submit', function(event) {
//   event.preventDefault();

//   // Disable the submit button to prevent repeated clicks
//   document.getElementById('submit-payment').disabled = true;

//   // Get the Stripe token for the card Element
//   stripe.createToken(card).then(function(result) {
//     if (result.error) {
//       // Inform the user if there was an error
//       var errorElement = document.getElementById('card-errors');
//       errorElement.textContent = result.error.message;

//       // Enable the submit button
//       document.getElementById('submit-payment').disabled = false;
//     } else {
//       // Send the token to your server
//       stripeTokenHandler(result.token);
//     }
//   });
// });

// // Send the token to your server
// function stripeTokenHandler(token) {
//   // Create a hidden input to hold the token value
//   var hiddenInput = document.createElement('input');
//   hiddenInput.setAttribute('type', 'hidden');
//   hiddenInput.setAttribute('name', 'stripeToken');
//   hiddenInput.setAttribute('value', token.id);

//   // Add the hidden input to the form
//   var form = document.getElementById('payment-form');
//   form.appendChild(hiddenInput);

//   // Submit the form
//   form.submit();
// }
