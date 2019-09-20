var stripe = Stripe('pk_test_IAW3LUMdvcXAhCDVkBpy1AVB');

window.onload = function() {
    document.getElementById("button").addEventListener("click", function(){
        stripe.redirectToCheckout({
            items: [
              {sku: 'sku_FqGXObT0B415lG', quantity: 1}
            ],
            successUrl: 'http://localhost:8000/success.html',
            cancelUrl: 'http://localhost:8000/cancel.html',
          }).then(function (result) {
            // If redirectToCheckout fails due to a browser or network
            // error, display the localized error message to your customer
            // using result.error.message.
            console.log(result.error.message)
          });
      });
}

