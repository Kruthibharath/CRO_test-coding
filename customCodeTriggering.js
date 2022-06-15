  // Custom Goals trigger code
  function customGoals() {
    var utils = window["optimizely"].get('utils');
    utils.waitUntil(function () {
      return (document.readyState === 'complete');
    }).then(function () {
      var removeMainBTN = document.querySelectorAll('.breakdown-basket .breakdown-basket--item');
      if (removeMainBTN.length > 0) {
        for (var q = 0; q < removeMainBTN.length; q++) {
          removeMainBTN[q].querySelector('.edit-button.edit').addEventListener("click", function () {
            var buttonTexts = this.parentElement.querySelector('p').textContent.trim().replace(/\s/g, "");
            if (buttonTexts == 'HomePestcover' || buttonTexts == 'HomeEmergencycover' || buttonTexts == 'FamilyLegalProtection' || buttonTexts == 'Travel+wintersportscover' || buttonTexts == 'TravelInsurance') {
              if (esureDataLayer.homeAutorenewalStatus == "OptedOut") {
                window['optimizely'] = window['optimizely'] || [];
                window['optimizely'].push({
                  type: "event",
                  eventName: "TravelNWintersportscover"
                });
              } else {
                window['optimizely'] = window['optimizely'] || [];
                window['optimizely'].push({
                  type: "event",
                  eventName: buttonTexts
                });
              }

            }
          });
        }
      }
    });
  }
  // End