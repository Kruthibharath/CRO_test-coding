void function variation() {
  if (!(document.querySelectorAll('.container')[0])) return setTimeout(variation, 25);

  function mobileOverlay() {
    var incomingDivOverlay = "<div class='modal-wrapper ng-tns-c12-12 ng-trigger ng-trigger-fadeInOut ng-star-inserted second-overlay'><div class='modal-content addon-modal mobile-overlay-addon'><h2 class='title'>Are you sure you want to remove this cover?</h2><div class='ng-tns-c12-12'><button class='drawer-btn cancel btn-overlay-no'>No</button><button class='drawer-btn primary btn-overlay-yes'>Yes</button></div></div></div><div class='overlay ng-tns-c12-12 ng-trigger ng-trigger-fadeInOut ng-star-inserted second-overlay'></div>";
    var selectorOverlay = document.querySelector(".column").parentElement;
    selectorOverlay.insertAdjacentHTML("afterend", incomingDivOverlay);
    buttonFunc();
  }

  function buttonFunc() {
    document.querySelector('.btn-overlay-yes').addEventListener("click", function () {
      document.querySelector('.second-overlay').remove();
      document.querySelector('.second-overlay').remove();
      document.querySelector('.modal-content.addon-modal .drawer-btn.primary').click();
    });

    document.querySelector('.btn-overlay-no').addEventListener("click", function () {
      document.querySelector('.second-overlay').remove();
      document.querySelector('.second-overlay').remove();
      document.querySelector('.modal-content.addon-modal .drawer-btn.cancel').click();

    });
  }

  function yourExcess() {
    var excessPrice = document.querySelectorAll('es-your-excesses ul li ul li .content');
    var excesses = document.querySelectorAll('.your-excess .cover-start');
    for (var i = 0; i < excesses.length; i++) {
      var excess = excesses[i].innerText;
      var ret = excess.replace('For', '');
      excesses[i].innerText = ret;
    }
    for (var j = 0; j < excessPrice.length; j++) {
      var excessPrices = excessPrice[j].innerText;
      var finalPrice = excessPrices.slice(excessPrices.indexOf("£"));
      var firstWord = excessPrices.replace(/ .*/, '');
      if (!excessPrice[j].parentNode.querySelectorAll(".finalPriceExcess_right")[0]) {
        excessPrice[j].style.display = "none";
        var newNode = document.createElement("span");
        newNode.className = "excess-prices-span";
        if (firstWord.indexOf("Total") > -1) {
          newNode.classList.add("totalPrice");
        }
        excessPrice[j].parentNode.insertBefore(newNode, excessPrice[j].nextSibling);
        newNode.innerHTML += "<div class='excess-prices'><div>" + firstWord + "</div><div class='finalPriceExcess_right'> " + finalPrice + "</div>";
      } else if (excessPrice[j].parentNode.querySelectorAll(".finalPriceExcess_right")[0].innerText !== finalPrice) {
        excessPrice[j].parentNode.querySelectorAll(".finalPriceExcess_right")[0].innerText = finalPrice;
      }
    }
  }
  yourExcess();

  if (document.querySelector('[data-qa-id="excessHeader"]')) {
    document.querySelector('[data-qa-id="excessHeader"] > span').innerText = "Excess";
    document.querySelector('h1').innerText = "Lets do a final check on your details";
    document.querySelector('[data-qa-id="aboutHomeHeader"]').innerText = "Your Home";

    document.querySelector('es-getting-documents').parentElement.style.background = "#f5f5f5";
    document.querySelector('es-getting-documents').parentElement.style.border = "none";

    var incomingDiv = "<div><h2 class='title'>You have 14 days to change your mind</h2><p>From the date when you receive your documents, you have 14 days to make sure you're happy with the cover. If you're not, just give us a call and we'll cancel it.</p><br><p class='fc'>As long as no incidents have arisen which could result in a claim under your policy, we will refund the premium you have paid, less the administration fee of £20. You can also choose to cancel your policy at any point after 14 days.</p><br><h2 class='title'>What happens next? </h2><p>You'll have access to your online portal called My Account, we will send you an email so you can sign in straight after you pay.</p><br><b>In my account you will be able to:</b><ul><li class='get-documents-list'>View all your documents</li><li class='get-documents-list'>Find out how to claim</li></ul><br></div>";
    var selector = document.querySelector("es-getting-documents");
    selector.insertAdjacentHTML("afterbegin", incomingDiv);
  }

  var cln = document.querySelector('es-fees-and-cancellations > div > p:nth-child(2)');
  var cln1 = document.querySelector('es-fees-and-cancellations > div > p:nth-child(3)');
  document.querySelector('.fc').appendChild(cln);
  document.querySelector('.fc').appendChild(cln1);
  document.querySelector('es-fees-and-cancellations').parentElement.style.display = 'none';
  document.querySelector('[data-qa-id="gettingDocsTextLine1"]').innerHTML = '<p class="ng-tns-c1-1" data-qa-id="gettingDocsTextLine1">You\'ll have 24/7 online access to your Schedule, along with the rest of your documents in My Account. It may take up to 24 hours for these documents to appear.</p><br><p class="ng-tns-c1-1">You can also view these in My Account at any time.</p>';

  function updatePrices() {
    var basketItems = document.querySelectorAll('.basket .ng-trigger-fadeInOnly');
    if (basketItems.length > 1) {
      var incomingDivExcess = "<div class='section optional-extras'><h2 class='title'>Your Optional Extras</h2><div class='breakdown-basket'></div></div>";
      var selectorExcess = document.querySelector("es-home-cover").parentElement;
      if (!document.querySelectorAll(".section.optional-extras")[0]) {
        selectorExcess.insertAdjacentHTML("afterend", incomingDivExcess);
        for (k = 0; k < basketItems.length - 1; k++) {
          document.querySelector('.breakdown-basket').innerHTML += "<div class='breakdown-basket--item'><div><p>" + basketItems[k].querySelector('.item-title').innerText + "</p><a class='edit-button edit'><em class='es-delete'></em>Remove</a></div><div><span class='plan-price'>" + basketItems[k].querySelector('.price').innerText + "</span><span class='payment-plan'></span>" + "</div></div>";
        }
      }
      var removes = document.querySelectorAll('.item-cost a');

      function removeBasket(item) {
        var jj = document.querySelectorAll('.item-title');
        for (var r = 0; r < jj.length; r++) {

          if (item.innerText === jj[r].innerText) {
            jj[r].parentElement.querySelector('a').click();
          }
        }
      }
      var removeButtons = document.querySelectorAll('.edit.edit-button');
      for (var i = 0; i < removeButtons.length; i++) {

        removeButtons[i].addEventListener("click", function () {
          removeBasket(this.parentElement.querySelector('p'));
        });
      }
      var mobileButtons = document.querySelectorAll('.edit-button');

      for (var p = 0; p < mobileButtons.length; p++) {
        mobileButtons[p].addEventListener("click", mobileOverlay);
      }
    }

  }
  updatePrices();
  var pleaseConfirm = "<h2 class='title acceptTC'>Please confirm</h2>";
  var selectorConfirm = document.querySelector(".declarations-wrapper");
  selectorConfirm.insertAdjacentHTML("afterbegin", pleaseConfirm);
  /*
  document.querySelector('.declarations-wrapper').addEventListener("click", function() {
    if(document.querySelector("#dec-check").checked == true){
      document.querySelector("#dec-check").checked = false;
    } else {
      document.querySelector("#dec-check").checked = true;
    }
  });
  */
  document.querySelector('.acceptTC').addEventListener("click", function(){
    document.querySelector("#dec-check").click();
  });
  function hasExtraChanged() {
    var originPricing = document.querySelectorAll('.price span');
    var newExcessPricing = document.querySelectorAll('.payment-plan');
    if (originPricing.length !== newExcessPricing.length) {
      return true;
    } else {
      var newTitles = document.querySelectorAll(".breakdown-basket--item p");
      for (var i = 0; i < originPricing.length; i++) {
        var originPricingTitles = originPricing[i].parentNode.parentNode.querySelectorAll(".item-title");
        if (originPricingTitles[0].innerText != newTitles[i].innerText) {
          return true;
        }
      }
    }
    return false;
  }

  function annualMonthly() {
    var paymentPlan;
    var planPrice = document.querySelectorAll('.plan-price');
    if (document.querySelector('[data-qa-id="pricingPaymentPlanText"]') && location.href.indexOf("https://www.esure.com/qbhome/review") > -1 && document.querySelectorAll(".section.optional-extras")[0]) {
      if (!paymentPlan || paymentPlan == "yearly") {
        paymentPlan = "monthly";
        if (document.querySelector('.payment-plan').innerText != paymentPlan) {
          var paymentsMonth = document.querySelectorAll('.payment-plan');
          var originPricing = document.querySelectorAll('.price span');
          if (!hasExtraChanged()) {
            for (var l = 0; l < paymentsMonth.length; l++) {
              paymentsMonth[l].innerText = "/MTH";
            }
          } else {
            var elem = document.querySelectorAll(".section.optional-extras")[0];
            elem.parentNode.removeChild(elem);
            updatePrices();
            customGoals();
          }
        }
      }

    } else if (document.querySelector('.payment-plan') && document.querySelectorAll(".section.optional-extras")[0]) {
      if (!paymentPlan || paymentPlan == "monthly") {
        paymentPlan = "yearly";
        if (document.querySelector('.payment-plan').innerText != paymentPlan) {
          document.querySelector('.payment-plan').innerText = "/YR";
          var originPricing = document.querySelectorAll('.price span');
          var paymentsYear = document.querySelectorAll('.payment-plan');
          if (!hasExtraChanged()) {
            for (var m = 0; m < paymentsYear.length; m++) {
              paymentsYear[m].innerText = "/YR";
              planPrice[m].innerText = originPricing[m].innerText;
            }
          } else {
            var elem = document.querySelectorAll(".section.optional-extras")[0];
            elem.parentNode.removeChild(elem);
            updatePrices();
            customGoals();
          }
        }
      }
    }
  }
  annualMonthly();
  var target = document.querySelectorAll(".basket-list")[0];
  var target2 = document.querySelectorAll(".nav-bar")[0];
  var config = {
    attributes: true,
    subtree: true,
    children: true
  };
  var observer = new MutationObserver(function (mutations) {
    annualMonthly();
    yourExcess();
  });
  observer.observe(target, config);
  observer.observe(target2, config);

  document.querySelectorAll(".final-declarations .declaration-check .checkmark")[0].addEventListener("click", function () {
    document.querySelectorAll(".final-declarations .declaration-check .checkmark")[0].classList.toggle("selected");
  });

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
              if (buttonTexts == "Travel+wintersportscover") {
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
}();