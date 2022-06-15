void function TitlePrice() {
  	if (!(document.querySelector('.main-container')) && !(document.querySelector('[data-qa-id = "SingleAddons"]')))return setTimeout(TitlePrice, 50);

     var MLPNegetiveButton = document.querySelector('[data-qa-id = "legalCoverAdditionalInfo"] [data-qa-id = "negativeButton"]');
    var MLPAffirmativeButton = document.querySelector('[data-qa-id = "legalCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"]');
    var MLPTitle = document.querySelector('[data-addon-name = "legalCover"] div.h2');
    MLPTitle.innerHTML = '<div id="MLPTitle"><span>Motor Legal Protection</span><span id="MLPPrice" class="alignRight"></span></div>';
    MLPTitle.classList.add('align');
    var MLPPrice = document.querySelector('#MLPPrice');
  	if(esureDataLayer.paymentOption == 'single_cc'){
    	MLPPrice.innerText = '£31.00/yr';
    } else {
      MLPPrice.innerText = '£2.86/mo';
    }
    document.querySelector('[data-qa-id = "legalCoverOfferOptions"] p.label').innerHTML = 'Your core policy includes access to a 24/7 motoring legal advice helpline, but would you need additional cover if you needed to take matters further?';
    document.querySelector('[data-addon-name = "legalCover"] .font-weight-500').classList.add('hide');

    var CHTitle = document.querySelector('[data-addon-name = "carHireCover"] div.h2');
    var CHNegetiveButton = document.querySelector('[data-qa-id = "carHireCoverAdditionalInfo"] [data-qa-id = "negativeButton"]');
    var CHAffirmativeButton = document.querySelector('[data-qa-id = "carHireCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"]');
    CHTitle.innerHTML = '<div id="CHTitle"><span>Car Hire</span><span id="CHPrice" class="alignRight"></span></div>';
    CHTitle.classList.add('align');
    var CHPrice = document.querySelector('#CHPrice');
  	if(esureDataLayer.paymentOption == 'single_cc'){
    	CHPrice.innerText = '£19.99/yr';
    } else {
      CHPrice.innerText = '£1.84/mo';
    }
    document.querySelector('[data-qa-id = "carHireCoverOfferOptions"] p.label').innerHTML = 'Your core policy includes a courtesy car as standard whilst your car is being repaired, but would you need car hire if your car was written off or stolen?';
    document.querySelector('[data-addon-name = "carHireCover"] .font-weight-500').classList.add('hide');
  
    var PIBTitle = document.querySelector('[data-addon-name = "personalInjuryCover"] div.h2');
    var PIBNegetiveButton = document.querySelector('[data-qa-id = "personalInjuryCoverAdditionalInfo"] [data-qa-id = "negativeButton"]');
    var PIBAffirmativeButton = document.querySelector('[data-qa-id = "personalInjuryCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"]');
    PIBTitle.innerHTML = '<div id="PIBTitle"><span>Personal Injury Benefit</span><span id="PIBPrice" class="alignRight"></span></div>';
    PIBTitle.classList.add('align');
    var PIBPrice = document.querySelector('#PIBPrice');
  	if(esureDataLayer.paymentOption == 'single_cc'){
    	PIBPrice.innerText = '£20.00/yr';
    } else {
      PIBPrice.innerText = '£1.85/mo';
    }  
    document.querySelector('[data-qa-id = "personalInjuryCoverOfferOptions"] p.label').innerHTML = 'Your core policy provides limited payments in the event of a personal accident or medical expenses, but if you were involved in a motoring incident, would you need enhanced compensation?';
    
  	if(sessionStorage.getItem("NCDTitlePrice")){
      sessionStorage.removeItem("NCDTitlePrice");
    }
  	if(sessionStorage.getItem("updatedNCDPrice")){
      sessionStorage.removeItem("updatedNCDPrice");
    }
  
  	var NCDContainer = document.querySelector('[data-qa-id = "SelectProtectedNCDContainer"]');
   	if(NCDContainer){
      var NCDTitle = document.querySelector('[data-qa-id = "SelectProtectedNCD"] div.h2');
      document.querySelector('[data-qa-id = "SelectProtectedNCD"] div.h3').classList.add('hide');
      var NCDTextContent = document.querySelector('[data-qa-id = "SelectProtectedNCD"] .content-container p');
      var NCDPurchaseText = 'Do you need to protect your No Claims Discount?';
      var NCDButtons = document.querySelector('[data-qa-id = "SelectProtectedNCD"] .section.centerContainer');
      if(!(document.querySelector('[data-qa-id = "SelectProtectedNCD"] p.h3'))){ 
          var parentDiv = document.querySelector('[data-qa-id = "SelectProtectedNCD"] .section.centerContainer').parentNode;
          var newEle = document.createElement('p');
          newEle.setAttribute('class','h3');
          newEle.innerHTML = NCDPurchaseText;
          NCDTitle.innerHTML = '<div><span id="NCDTitle">Protect your No Claim Discount</span><span id="NCDPrice" class="alignRight"></span></div>';
          NCDTitle.classList.add('align');
          parentDiv.insertBefore(newEle,NCDButtons);
      }	
      var NCDAmount =  document.querySelector('[data-qa-id = "YesPNCDMoveOnButton"] .content-two-main-amount').innerText;
      var annualAmt =  document.querySelector('[data-qa-id = "YesPNCDMoveOnButton"] .content-two-pncd-yes .font-weight-normal');
      if(annualAmt){
        var priceValue = annualAmt.innerText;
        var price = priceValue.trim().replace(/[{()}]/g,'');             
        sessionStorage.setItem("NCDTitlePrice",price);
      } else {
        sessionStorage.setItem("NCDTitlePrice",NCDAmount);
      }
      document.querySelector('#NCDPrice').innerText = sessionStorage.getItem("NCDTitlePrice");
      if(NCDTextContent.hasAttribute('class')){
          NCDTextContent.classList.remove('is-size-7','has-text-weight-normal');   
      }
      if(!document.querySelector('[data-qa-id = "YesPNCDMoveOnButton"] .content-two-main-amount.updated')){
        var newButtonEle = document.createElement('span');
        newButtonEle.setAttribute('class','content-two-main-amount updated');
        document.querySelector('[data-qa-id = "YesPNCDMoveOnButton"] .content-two-pncd-yes').appendChild(newButtonEle);
      }
      if(NCDButtons){
      	setNCDButtons();  
    	}
    }
  
  var titlePriceTest;
  titlePriceTest = setInterval(testActive,400);
  function testActive(){
    if(!(document.querySelector('#MLPTitle'))){
      TitlePrice();  
    } else {
      clearInterval(titlePriceTest); 
    }
  }

  function setMLPAdditionalButtons(){
    document.querySelector('[data-qa-id = "legalCoverAdditionalInfo"] div.h3').innerText = "Upgrade to Motor Legal Protection and you’re covered for:";
    var buttonTopText = document.querySelectorAll('[data-qa-id = "legalCoverAdditionalInfo"] .content-one ');
    var affirmUpperText = document.querySelector('[data-qa-id = "legalCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"] span.content-two-upper-text');
    var MLPNegetiveButton = document.querySelector('[data-qa-id = "legalCoverAdditionalInfo"] [data-qa-id = "negativeButton"]');
    var MLPAffirmativeButton = document.querySelector('[data-qa-id = "legalCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"]');
    var mainAmount = document.querySelector('[data-qa-id = "legalCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"] span.content-two-main-amount');
    var annualAmt = document.querySelector('[data-qa-id = "legalCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"] .font-weight-normal');
    for(var i = 0; i< buttonTopText.length;i++){
      buttonTopText[i].classList.add('hide');
    }
    if(affirmUpperText){
      affirmUpperText.classList.add('hide'); 
    }
    document.querySelector('[data-qa-id = "legalCoverAdditionalInfo"] [data-qa-id = "negativeButton"] #tick').classList.add('not-drawn');
    document.querySelector('[data-qa-id = "legalCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"] #tick').classList.add('not-drawn');
    document.querySelector('[data-qa-id = "legalCoverAdditionalInfo"] [data-qa-id = "negativeButton"] .content-two span').innerHTML = "Continue without"+"<br>"+"Motor Legal Protection"; 
    if(esureDataLayer.paymentOption == 'single_cc'){
        mainAmount.innerText = "Add for £31.00/yr";
      	if(annualAmt){annualAmt.classList.add('hide');}
    } else {
        mainAmount.innerText = "Add for £2.86/mo";        
    }
    MLPNegetiveButton.onclick = processMLPNegEvent; 
    MLPAffirmativeButton.onclick = processMLPAfrEvent;  
  }
  function processMLPNegEvent(){
      titlePriceTest = setInterval(testActive,400);
      setTimeout(function(){TitlePrice();},350);
    }
  function processMLPAfrEvent(){
      titlePriceTest = setInterval(testActive,400);
      setTimeout(function(){TitlePrice();},350);
    }
  if(MLPNegetiveButton || MLPAffirmativeButton){
    setTimeout(function(){
      setMLPAdditionalButtons();   
    },350);          
  }
  
  function setCHAdditionalButtons(){
    document.querySelector('[data-qa-id = "carHireCoverAdditionalInfo"] div.h3').innerText = "Upgrade to Car Hire and receive:";
    document.querySelector('[data-qa-id = "carHireCoverAdditionalInfo"] ul.single-addon-bullet-list li:first-child span').innerText = "A similar type and sized hire car for up to 21 days";
    document.querySelectorAll('[data-qa-id = "carHireCoverAdditionalInfo"] ul.single-addon-bullet-list')[1].firstElementChild.firstElementChild.innerText = "Collection for you from your home or work to pick up the car";
    document.querySelectorAll('[data-qa-id = "carHireCoverAdditionalInfo"] ul.single-addon-bullet-list')[2].firstElementChild.firstElementChild.innerText = "Cover for all named drivers on the policy";
    var buttonTopText = document.querySelectorAll('[data-qa-id = "carHireCoverAdditionalInfo"] .content-one ');
    var affirmUpperText = document.querySelector('[data-qa-id = "carHireCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"] span.content-two-upper-text');
    var CHNegetiveButton = document.querySelector('[data-qa-id = "carHireCoverAdditionalInfo"] [data-qa-id = "negativeButton"]');
    var CHAffirmativeButton = document.querySelector('[data-qa-id = "carHireCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"]');
    var mainAmount = document.querySelector('[data-qa-id = "carHireCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"] span.content-two-main-amount');
    var annualAmt = document.querySelector('[data-qa-id = "carHireCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"] .font-weight-normal');
    for(var i = 0; i<buttonTopText.length;i++){
      buttonTopText[i].classList.add('hide');
    }
    if(affirmUpperText){
      affirmUpperText.classList.add('hide'); 
    }
    document.querySelector('[data-qa-id = "carHireCoverAdditionalInfo"] [data-qa-id = "negativeButton"] #tick').classList.add('not-drawn');
    document.querySelector('[data-qa-id = "carHireCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"] #tick').classList.add('not-drawn');
    document.querySelector('[data-qa-id = "carHireCoverAdditionalInfo"] [data-qa-id = "negativeButton"] .content-two span').innerHTML = "Continue without"+ "<br>" +"Car Hire"; 
   if(esureDataLayer.paymentOption == 'single_cc'){
        mainAmount.innerText = "Add for £19.99/yr";
      	if(annualAmt){annualAmt.classList.add('hide');}
    } else {
        mainAmount.innerText = "Add for £1.84/mo";        
    }
    CHNegetiveButton.onclick = processCHNegEvent; 
    CHAffirmativeButton.onclick = processCHAfrEvent;
  }
  function processCHAfrEvent(){
    titlePriceTest = setInterval(testActive,400);
    setTimeout(function(){TitlePrice();},350);
  }
  function processCHNegEvent(){
    titlePriceTest = setInterval(testActive,400);
    setTimeout(function(){TitlePrice();},350);
  }
  if(CHNegetiveButton || CHAffirmativeButton){
    setTimeout(function(){
      setCHAdditionalButtons();   
    },350);          
  }
  
  function setPIBAdditionalButtons(){
    document.querySelector('[data-qa-id = "personalInjuryCoverAdditionalInfo"] div.h3').innerText = "Upgrade to Personal Injury Benefit and receive:";
    var buttonTopText = document.querySelectorAll('[data-qa-id = "personalInjuryCoverAdditionalInfo"] .content-one ');
    var affirmUpperText = document.querySelector('[data-qa-id = "personalInjuryCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"] span.content-two-upper-text');
    var PIBNegetiveButton = document.querySelector('[data-qa-id = "personalInjuryCoverAdditionalInfo"] [data-qa-id = "negativeButton"]');
    var PIBAffirmativeButton = document.querySelector('[data-qa-id = "personalInjuryCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"]');
    var mainAmount = document.querySelector('[data-qa-id = "personalInjuryCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"] span.content-two-main-amount');
    var annualAmt = document.querySelector('[data-qa-id = "personalInjuryCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"] .font-weight-normal');
    for(var i = 0; i<buttonTopText.length;i++){
      buttonTopText[i].classList.add('hide');
    }
    if(affirmUpperText){
      affirmUpperText.classList.add('hide'); 
    }
    document.querySelector('[data-qa-id = "personalInjuryCoverAdditionalInfo"] [data-qa-id = "negativeButton"] #tick').classList.add('not-drawn');
    document.querySelector('[data-qa-id = "personalInjuryCoverAdditionalInfo"] [data-qa-id = "affirmativeButton"] #tick').classList.add('not-drawn');
    document.querySelector('[data-qa-id = "personalInjuryCoverAdditionalInfo"] [data-qa-id = "negativeButton"] .content-two span').innerHTML = "Continue without"+"<br>"+"Personal Injury Benefit"; 
    if(esureDataLayer.paymentOption == 'single_cc'){
        mainAmount.innerText = "Add for £20.00/yr";
      	if(annualAmt){annualAmt.classList.add('hide');}
    } else {
        mainAmount.innerText = "Add for £1.85/mo";        
    }
    PIBNegetiveButton.onclick = processPIBNegEvent;
    PIBAffirmativeButton.onclick = processPIBAfrEvent;
  }
  function processPIBNegEvent(){
    titlePriceTest = setInterval(testActive,400);
    setTimeout(function(){TitlePrice();},350);
  }
  function processPIBAfrEvent(){
    titlePriceTest = setInterval(testActive,400);
    setTimeout(function(){TitlePrice();},350);
  }
  if(PIBNegetiveButton || PIBAffirmativeButton){
    setTimeout(function(){
      setPIBAdditionalButtons();   
    },350);          
  }
  
  function setNCDButtons(){
    var affirmUpperText = document.querySelector('[data-qa-id = "YesPNCDMoveOnButton"] span.content-two-upper-text');
    var NCDNegetiveButton = document.querySelector('[data-qa-id = "NoPNCDMoveOnButton"]');
    var NCDAffirmativeButton = document.querySelector('[data-qa-id = "YesPNCDMoveOnButton"]');
    var NCDAmount = document.querySelector('[data-qa-id = "YesPNCDMoveOnButton"] .content-two-main-amount').innerText; 
    var annualAmt =  document.querySelector('[data-qa-id = "YesPNCDMoveOnButton"] .content-two-pncd-yes .font-weight-normal');
    var newMainAmt = document.querySelector('[data-qa-id = "YesPNCDMoveOnButton"] .content-two-main-amount.updated');
    document.querySelector('[data-qa-id = "YesPNCDMoveOnButton"] .content-two-main-amount').classList.add('hide');
    document.querySelector('[data-qa-id = "NoPNCDMoveOnButton"] .content-one ').classList.add('hide');
    document.querySelector('[data-qa-id = "YesPNCDMoveOnButton"] .content-one ').classList.add('hide');
    if(affirmUpperText){
      affirmUpperText.classList.add('hide'); 
    }
    document.querySelector('[data-qa-id = "NoPNCDMoveOnButton"] #tick').classList.add('not-drawn');
    document.querySelector('[data-qa-id = "YesPNCDMoveOnButton"] #tick').classList.add('not-drawn');
    document.querySelector('[data-qa-id = "NoPNCDMoveOnButton"] .content-two span').innerHTML = "I don’t need"+"<br>"+"Protected NCD";
     if(annualAmt){
       var annualAmtValue = annualAmt.innerText;
       var updatedPrice = annualAmtValue.trim().replace(/[{()}]/g,'');
       sessionStorage.setItem("updatedNCDPrice",updatedPrice);
     } else { 
        sessionStorage.setItem("updatedNCDPrice",NCDAmount);
      }
  if( newMainAmt.innerText != sessionStorage.getItem("updatedNCDPrice")){
      newMainAmt.innerHTML = "Add for "+sessionStorage.getItem("updatedNCDPrice");
      if(annualAmt){annualAmt.classList.add('hide');}
    }  
   NCDNegetiveButton.onclick = processNCDNegEvent;
   NCDAffirmativeButton.onclick = processNCDAfrEvent;
  }
    function processNCDNegEvent(){
      titlePriceTest = setInterval(testActive,400);
      setTimeout(function(){TitlePrice();},350);  
    }
    function processNCDAfrEvent(){
      titlePriceTest = setInterval(testActive,400);
      setTimeout(function(){TitlePrice();},350);
    }
      document.querySelector('.level-right.costs [data-qa-id = "changeTypeOfPayment"]').addEventListener('click',function(){
        setTimeout(function(){
            paymentSelection();
        },200);
    });

   function paymentSelection(){
     document.querySelector('.drawer-cta [data-qa-id = "updateButton"]').addEventListener("click",function(){    
       if(document.querySelector('#payAnnually').checked){
         MLPPrice.innerText = '£31.00/yr';
         CHPrice.innerText = '£19.99/yr';
         PIBPrice.innerText = '£20.00/yr';
         if(NCDContainer && sessionStorage.getItem("NCDTitlePrice")){ 
           document.querySelector('#NCDPrice').innerText = sessionStorage.getItem("NCDTitlePrice");
         }
       } 
       if(document.querySelector('#payMonthly').checked){
         MLPPrice.innerText = '£2.86/mo';
         CHPrice.innerText = '£1.84/mo';
         PIBPrice.innerText = '£1.85/mo';
         if(NCDContainer && sessionStorage.getItem("NCDTitlePrice")){ 
           document.querySelector('#NCDPrice').innerText = sessionStorage.getItem("NCDTitlePrice");
         }
       }       
       setTimeout(function(){
         TitlePrice();
       },300);
     }); 
   }
  
  	document.querySelector('[data-qa-id = "legalCoverOfferOptions"] #affirmativeButton').addEventListener("click", function(){
      titlePriceTest = setInterval(testActive,400);
      setMLPAdditionalButtons(); 
    });
    document.querySelector('[data-qa-id = "legalCoverOfferOptions"] #negativeButton').addEventListener("click", function(){
     titlePriceTest = setInterval(testActive,400);
     setTimeout(function(){TitlePrice();},350);
    });
   	document.querySelector('[data-qa-id = "carHireCoverOfferOptions"] #affirmativeButton').addEventListener("click", function(){
      titlePriceTest = setInterval(testActive,400);
      setCHAdditionalButtons(); 
    });
    document.querySelector('[data-qa-id = "carHireCoverOfferOptions"] #negativeButton').addEventListener("click", function(){
     titlePriceTest = setInterval(testActive,400);
     setTimeout(function(){TitlePrice();},350);
    });
  	document.querySelector('[data-qa-id = "personalInjuryCoverOfferOptions"] #affirmativeButton').addEventListener("click", function(){
      titlePriceTest = setInterval(testActive,400);
      setPIBAdditionalButtons();  
    });
    document.querySelector('[data-qa-id = "personalInjuryCoverOfferOptions"] #negativeButton').addEventListener("click", function(){
      titlePriceTest = setInterval(testActive,400);
     	setTimeout(function(){TitlePrice();},350);
    });
}();