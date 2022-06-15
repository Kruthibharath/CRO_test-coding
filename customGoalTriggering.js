
var utils = window["optimizely"].get('utils');
utils.waitUntil(function () {
  return (document.readyState === 'complete');
}).then(function () {

  // main goal code function.
  function goalTrigger() {
    utils.waitUntil(function () {
      return (document.readyState === 'complete' && !!esureDataLayer.motorAutorenewalStatus);
    }).then(function () {

      // goal trigger function
      function triggerMatrics(goalAPI) {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
            type: "event",
            eventName: goalAPI
        });
    };
    
    // goal trigger on payment page
    if (window.location.href === 'https://www.esure.com/motor/payment') {
        if (esureDataLayer.motorAutorenewalStatus === "OptedIn") {
          triggerMatrics('MotorUsersOptedInAutoRenewal');
        }
        if (esureDataLayer.motorAutorenewalStatus === 'OptedOut') {
          triggerMatrics('MotorUsersOptedOutAutoRenewal');
        }
  
      }

      // goal trigger on confirmation page
      if (esureDataLayer.pageName === 'MOTOR Purchase Confirmatio') {

        if (esureDataLayer.motorAutorenewalStatus === "OptedIn") {
          triggerMatrics('sales_motor_optedIn_AR');
        }
        if (esureDataLayer.motorAutorenewalStatus === 'OptedOut') {
          triggerMatrics('sales_motor_optedOut_AR');
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

----------------*******************------------------------------------
var utils = window["optimizely"].get('utils');
utils.waitUntil(function () {
    return (document.readyState === 'complete');
}).then(function () {
    function customGoalTrigger(targetID , myCustomGoal) {
        var myClickTarget = document.querySelector(targetID);
        if (myClickTarget) {
            myClickTarget.addEventListener("click" , function () {
                window['optimizely'] = window['optimizely'] || [];
                window['optimizely'].push({
                    type: "event",
                    eventName: myCustomGoal
                });
            });
        }
    }
    customGoalTrigger('[data-qa-id = "summaryButton"] .button.cta ' , 'overAllNextCTA');
  	customGoalTrigger('.final-check .button.cta' , 'overAllNextCTA');
});