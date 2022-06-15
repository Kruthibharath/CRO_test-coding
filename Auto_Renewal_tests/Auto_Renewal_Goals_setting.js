var utils = window["optimizely"].get('utils');
utils.waitUntil(function () {
  return (document.readyState === 'complete');
}).then(function () {

  // main goal code function.
  function goalTrigger() {
    utils.waitUntil(function () {
      return (document.readyState === 'complete' && !!esureDataLayer.homeAutorenewalStatus);
    }).then(function () {

      // goal trigger function
      function triggerMatrics(goalAPI) {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
            type: "event",
            eventName: goalAPI
        });
    }
    
    // goal trigger on payment page
      if (window.location.href === 'https://www.esure.com/qbhome/payment') {
        if (esureDataLayer.homeAutorenewalStatus === "OptedIn") {
          triggerMatrics('UsersOptedInAutoRenewal');
        }
        if (esureDataLayer.homeAutorenewalStatus === 'OptedOut') {
          triggerMatrics('UsersOptedOutAutoRenewal');
        }
      }   
   
      // goal trigger on confirmation page
      if (esureDataLayer.pageName === 'HOME Purchase Confirmation') {
        if (esureDataLayer.homeAutorenewalStatus === "OptedIn") {
          triggerMatrics('sales_home_optedIn_AR');
        }
        if (esureDataLayer.homeAutorenewalStatus === 'OptedOut') {
          triggerMatrics('sales_home_optedOut_AR');
        }
      }     
    });
  }
  goalTrigger();
  
  // recalling main goal code function on page change
  window.addEventListener('pageChange', function () {
    goalTrigger();
  });
  
});


window.onpopstate = function() {
  location.reload();
};
