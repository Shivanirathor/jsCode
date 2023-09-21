const cart = ["shoes", "pants", "shirts"];

//Before - using callback function - we were passing a function in another function
createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
});

proceedToPayment(orderId)
// why will it be called
//multiple times

//after
const promise = createOrder(cart);
// {data: undefined => details}

// here we are attaching a function to a promise object
promise.then(function (orderId) {
  proceedToPayment(orderId);
});
//ensures it will call our function only once

const user = fetch("https://api.chucknorris.io/jokes/random");
console.log(user);

user.then(function (data) {
  console.log(data);
});

//Promise chaining

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    orderSummary(paymentInfo, function () {
      updateWalletBalance(); //code increases horizontally eventually leading to callback hell
    });
  });
});

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return orderSummary(paymentInfo);
  })
  .then(function (balance) {
    return updateWalletBalance(balance);
  });

// using arrow function - increasing readability
createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => orderSummary(paymentInfo))
  .then((balance) => updateWalletBalance(balance));
