void function SimplifiedBreakdown() {
  if (!(document.querySelector('.main-container')))return setTimeout(SimplifiedBreakdown, 50);
  
  var BCTitle = document.querySelector('[data-qa-id="SelectRacBreakdownCover"] .has-text-primary div.h2');
  BCTitle.innerHTML = '<span id="BCTitle" class="h2">Breakdown cover</span>';
   document.querySelector('[data-qa-id="SelectRacBreakdownCover"] .breakdown-container div.h3').innerText = 'If you don’t already have cover, would you need assistance if your car had a flat tyre or a mechanical failure?';

  function BCOfferOption2(){
    if(document.querySelector('[data-qa-id="BreakdownOfferSection2"]')){
      document.querySelector('[data-qa-id="BreakdownOfferSection2"] .message-section').classList.add('hide');
      var BCMessage = document.querySelectorAll('[data-qa-id="BreakdownOfferSection2"] p');
      var BCOptions2 = document.querySelector("[data-qa-id='BreakdownOfferOption2'] .proceed-offer-options-container");
      for (var i=0; i < BCMessage.length; i++){
        BCMessage[i].className = 'hide';
      }
      document.querySelector('[data-qa-id="BreakdownOfferSection2"] div.h2').innerText = 'Would you need breakdown assistance if your car broke down at home?';
      document.querySelector('[data-qa-id="BreakdownOfferOption2"] p').classList.add('hide');
      BCOptions2.append(BCOptions2.firstChild);    
      document.querySelector('[data-qa-id="BreakdownOfferOption2"] #affirmativeButton p').innerText = 'Yes';
      document.querySelector('[data-qa-id="BreakdownOfferOption2"] #negativeButton p').innerText = 'No';
       document.querySelector('[data-qa-id = "BreakdownOfferOption2"] #affirmativeButton').addEventListener('click',function(){ 
        BCOfferOption3();
      }); 
      document.querySelector('[data-qa-id = "BreakdownOfferOption2"] #negativeButton').addEventListener('click',function(){ 
        BCOfferOption3();
      }); 
    }
  }

  function BCOfferOption3(){
    if(document.querySelector('[data-qa-id="BreakdownOfferSection3"]')){  
      document.querySelector('[data-qa-id="BreakdownOfferSection3"] div.h2').innerText = 'Where would you want your car to be towed if it could not be fixed at the roadside?'; 
      document.querySelector('[data-qa-id="BreakdownOfferSection3"] p').classList.add('hide');
      var BCOptions3 = document.querySelector('[data-qa-id="BreakdownOfferSection3"]').nextElementSibling;
      BCOptions3.firstElementChild.classList.add('align');
      BCOptions3.firstChild.firstElementChild.classList.add('hide');  
    }
  }
  
  document.querySelector('[data-qa-id = "BreakdownOfferOption1"] #affirmativeButton').addEventListener('click',function(){ 
    BCOfferOption2();
	});
   
  BCOfferOption2();
  BCOfferOption3();
  
}();

console.log("Variation 222!!!!");