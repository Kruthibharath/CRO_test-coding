void function addonTables() {
if (!(document.querySelector('.main-container'))) return setTimeout(addonTables, 350); 
var legalNegButton = document.querySelector('[data-qa-id="legalCoverAdditionalInfo"] .centered-content.addon-select-section').firstElementChild;
var legalAffrButton = document.querySelector('[data-qa-id="legalCoverAdditionalInfo"] .centered-content.addon-select-section').lastElementChild;
var carHireNegButton = document.querySelector('[data-qa-id="carHireCoverAdditionalInfo"] .centered-content.addon-select-section').firstElementChild;
var carHireAffrButton = document.querySelector('[data-qa-id="carHireCoverAdditionalInfo"] .centered-content.addon-select-section').lastElementChild;
var PIBNegButton = document.querySelector('[data-qa-id="personalInjuryCoverAdditionalInfo"] .centered-content.addon-select-section').firstElementChild;
var PIBAffrButton = document.querySelector('[data-qa-id="personalInjuryCoverAdditionalInfo"] .centered-content.addon-select-section').lastElementChild;
var keyCoverNegButton = document.querySelector('[data-qa-id="keyCoverAdditionalInfo"] .centered-content.addon-select-section').firstElementChild;
var keyCoverAffrButton = document.querySelector('[data-qa-id="keyCoverAdditionalInfo"] .centered-content.addon-select-section').lastElementChild;
var NCDNegButton = document.querySelector("[data-qa-id = 'NoPNCDMoveOnButton'] button");
var NCDAffrButton = document.querySelector("[data-qa-id = 'YesPNCDMoveOnButton'] button"); 

var greenTick = '<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.86787 8.6018L6.73667 14.9924C10.7462 8.87666 15.248 3.51683 19.3279 0.424618C20.2423 -0.399972 21.6491 0.0810385 20.6644 0.974344C16.0921 5.5783 12.575 10.8007 8.98761 18.9779C7.58077 19.9399 5.96291 20.4209 5.18915 19.5276L0.124541 10.6633C-0.578878 9.56382 1.88309 7.02134 2.86787 8.6018Z" fill="#8BBC37"/></svg>';
    
var redCross = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0855 8.00001L15.5683 2.51726C16.1441 1.94141 16.1441 1.00774 15.5683 0.431887C14.9924 -0.143962 14.0587 -0.143962 13.4829 0.431887L8.00008 5.91466L2.51728 0.431906C1.94143 -0.143943 1.00774 -0.143943 0.43189 0.431906C-0.143963 1.00775 -0.143963 1.94143 0.43189 2.51728L5.91469 8.00001L0.43191 13.4828C-0.143944 14.0586 -0.143944 14.9923 0.43191 15.5681C1.00776 16.144 1.94143 16.144 2.51728 15.5681L8.00008 10.0854L13.4829 15.5681C14.0587 16.144 14.9924 16.144 15.5682 15.5681C16.1441 14.9923 16.1441 14.0586 15.5682 13.4828L10.0855 8.00001Z" fill="#DD4E30"/></svg>';
  
var MLPInfo = document.querySelector('[data-addon-name = "legalCover"] .addon-heading').nextElementSibling;
var CHInfo = document.querySelector('[data-addon-name = "carHireCover"] .addon-heading').nextElementSibling;
var PIBInfo = document.querySelector('[data-addon-name = "personalInjuryCover"] .addon-heading').nextElementSibling;
var KCInfo = document.querySelector('[data-addon-name = "keyCover"] .addon-heading').nextElementSibling;
 
MLPInfo.innerHTML = "If you had an accident that wasn't your fault or was partially your fault, then <b> would you need help with legal costs to recover uninsured losses, such as loss of wages or personal injury compensation? </b>";
document.querySelector("[data-qa-id = 'legalCoverAdditionalInfo'] ul.single-addon-bullet-list ").classList.add('hide');
  
CHInfo.innerHTML = "Your core policy includes a courtesy car whilst your car is being repaired after an accident but <b> would you need a hire car if yours was written off or stolen?</b>";
document.querySelector("[data-qa-id = 'carHireCoverAdditionalInfo'] ul.single-addon-bullet-list ").classList.add('hide');
  
PIBInfo.innerHTML = "Your core policy provides limited payments for specifc injuries in the event of a personal accident, but if you were involved in a motoring incident,<b> would you need enhanced compensation?</b>";
document.querySelector("[data-qa-id = 'personalInjuryCoverAdditionalInfo'] ul.single-addon-bullet-list ").classList.add('hide');
       
KCInfo.innerHTML = "Your core policy provides limited cover for stolen keys for your car only.<b> Would you need cover if your keys were lost or damaged?</b> Upgrade to Key cover and you'll be covered for all of your car and garage keys if they are lost, damaged or stolen.";
document.querySelector("[data-qa-id = 'keyCoverAdditionalInfo'] ul.single-addon-bullet-list ").classList.add('hide');       

var headingElements = {
  GetHeadings: function(addOnTypes){
    return ['','Included as Standard',addOnTypes];
  }
};
var rowElements = {
  GetElements: function(){
    return ["info","includesInStd","includesInAddOn"];
  }
};
var MLPdata = {
  GetMLPInfo: function(stdInclusion,addOnInclusion){
    return[
      {
        info: "Access to a 24/7 motoring legal advice helpline",
        includesInStd: greenTick,
        includesInAddOn: greenTick  
      },
      {
        info: "Up to £100,000 legal costs to help recover your uninsured losses after an accident caused by someone else",
        includesInStd: redCross,
        includesInAddOn: greenTick
      },
      {
        info: "Up to £100,000 legal costs to defend you against a motoring prosecution",
        includesInStd: redCross,
        includesInAddOn: greenTick 
      },
      {
        info:  "Up to £10,000 to represent you in a motoring database dispute",
        includesInStd: redCross,
        includesInAddOn: greenTick
      },
      {
        info: "Price",
        includesInStd: "£0 <br/>included in standard policy)", 
        includesInAddOn: "Monthly<br/>£2.86<br/>Yearly<br/>£31.00" 
      },
      {
        info: "Choose your Cover",
        includesInStd: legalNegButton,
        includesInAddOn: legalAffrButton
      }
    ];        
  }
};
var CHdata = {
  GetCHInfo: function(stdInclusion,addOnInclusion){
    return[
      {
        info: "Courtesy car whilst your car is being repaired by our recommended repairers after an accident",
        includesInStd: greenTick,
        includesInAddOn: greenTick  
      },
      {
        info: "A similar type and sized car by the end of the next working day, for up to 21 days",
        includesInStd: redCross,
        includesInAddOn: greenTick
      },
      {
        info: "A hire car if your car is written off or stolen",
        includesInStd: redCross,
        includesInAddOn: greenTick
      },
      {
        info:  "Collection for you from your home or work to pick up the car",
        includesInStd: redCross,
        includesInAddOn: greenTick
      },
      {
        info: "Price",
        includesInStd: "£0<br/>(included in standard policy)",
        includesInAddOn: "Monthly<br/>£1.84<br/>Yearly<br/>£19.99" 
      },
      {
        info: "Choose your Cover",
        includesInStd: carHireNegButton,
        includesInAddOn: carHireAffrButton
      }
    ];          
  }
};
var PIBdata = {
  GetPIBInfo: function(stdInclusion,addOnInclusion){
    return[
      {
        info: "Up to £100,000 cover if you, your named drivers and passengers are at fault in an accident and suffer a permanent injury",
        includesInStd: redCross,
        includesInAddOn: greenTick 
      },
      {
        info: "Cover for loss of limbs and sight for the policyholder and partner as a result of an accident",
        includesInStd: "Up to £5,000 (£10,000 per period of cover)",
        includesInAddOn: "Up to £100,000" 
      },
      {
        info: "Cover for death for the policyholder and partner as a result of an accident",
        includesInStd: "Up to £5,000 (£10,000 per period of cover)",
        includesInAddOn: "Up to £100,000" 
      },
      {
        info: "Up to £30,000 cover for the policyholder and named drivers whilst travelling as a passenger or getting into or out of any car",
        includesInStd: redCross,
        includesInAddOn: greenTick 
      },
      {
        info: "£1,000 per fracture suffered as a result of an accident up to a maximum of £5,000",
        includesInStd: redCross,
        includesInAddOn: greenTick
      },
      {
        info: "Up to £1000 for counselling and other psychological therapies required as a result of an accident",
        includesInStd: redCross,
        includesInAddOn: greenTick
      },
      {
        info: "A limit of £750 towards physiotherapy as a result of an accident",
        includesInStd: redCross,
        includesInAddOn: greenTick 
      },
      {
        info: "Up to £30,000 if you or your named driver are not at fault in an accident and suffer a permanent injury",
        includesInStd: redCross,
        includesInAddOn: greenTick 
      },
      {
        info: "Price",
        includesInStd: "£0<br/>(included in standard policy)",
        includesInAddOn: "Monthly<br/>£1.85<br/>Yearly<br/>£20.00" 
      },
      {
        info: "Choose your Cover",
        includesInStd: PIBNegButton,
        includesInAddOn: PIBAffrButton
      }
    ];          
  }
};
var KCdata = {
  GetKCInfo: function(stdInclusion,addOnInclusion){
    return[
      {
        info: "Cover for stolen keys",
        includesInStd: "£500",
        includesInAddOn: "Up to £1,500"  
      },
      {
        info: "Replacing locks and keys and resetting or reprogramming your car's immobiliser and alarm system if your car keys are stolen",
        includesInStd: "£500",
        includesInAddOn: "Up to £1,500" 
      },
      {
        info: "The cost of replacing garage keys and locks",
        includesInStd: redCross,
        includesInAddOn: greenTick 
      },
      {
        info: "Transporting you, your car and up to 8 passengers to the nearest suitable garage to get a replacement key or replace locks",
        includesInStd: redCross,
        includesInAddOn: greenTick
      },
      {
        info: "Car hire or alternative transport costs so you can complete your journey",
        includesInStd: redCross,
        includesInAddOn: greenTick
      },
      {
        info: "Price",
        includesInStd: "£0<br/>(included in standard policy)",
        includesInAddOn: "Monthly<br/>£1.85<br/>Yearly<br/>£20.00" 
      },
      {
        info: "Choose your Cover",
        includesInStd: keyCoverNegButton,
        includesInAddOn: keyCoverAffrButton
      }
    ];          
  }
};
    
function createTable(typeOfAddon,tn,tableName) {
    var selector,cellValues;
    var elements = rowElements.GetElements();
    var headings = headingElements.GetHeadings(typeOfAddon);  
    var tbl = document.createElement('table');
    tbl.setAttribute('id',tableName);
    var headRow = tbl.insertRow();
    
    if(tn==="legalCover"){  
      selector = MLPInfo; 
      cellValues = MLPdata.GetMLPInfo();
    } else if(tn==="carHire"){
      selector = CHInfo; 
      cellValues = CHdata.GetCHInfo();
    } else if(tn==="personalInjuryCover"){
      selector = PIBInfo; 
      cellValues = PIBdata.GetPIBInfo();
    } else if(tn==="keyCover"){
      selector = KCInfo;
      cellValues = KCdata.GetKCInfo();
    }
    
  	for(var i=0; i<headings.length; i++){       
      if(i == 0){
        headRow.insertCell(-1).outerHTML = '<th scope ="colgroup" class="addon-info-panel invisible">'+headings[i]+'</th>';
      }else if(i == 1){
        headRow.insertCell(-1).outerHTML = '<th class="addon-info-panel coreCol">'+headings[i]+'</th>'; 
      }else{
        headRow.insertCell(-1).outerHTML = '<th class="addon-info-panel addonCol">'+headings[i]+'</th>'; 
      }
    }

    for(var j=0; j< cellValues.length; j++){
      var dataRow = tbl.insertRow(-1); 
      for(var k=0; k<elements.length; k++){
        var dataCell = dataRow.insertCell(-1);
        if(k == 0){
          dataCell.setAttribute("class","addon-info-panel");
        }else if(k == 1){
           dataCell.setAttribute("class","symbols coreCol"); 
        } else {
          dataCell.setAttribute("class","symbols addonCol"); 
        }
        if(tn === "legalCover"||tn==="carHire"){
            if(j==5 && (k==1||k==2)){
              dataCell.appendChild( cellValues[j][elements[k]]);     
            }else{
              dataCell.innerHTML = cellValues[j][elements[k]]; 
            }
        } else if(tn==="keyCover"){
            if(j==6 &&(k==1||k==2)){
              dataCell.appendChild( cellValues[j][elements[k]]);
            } else{
              dataCell.innerHTML = cellValues[j][elements[k]]; 
            }
            
        } else{
            if(j==9 &&(k==1||k==2)){
              dataCell.appendChild( cellValues[j][elements[k]]);
            } else{
              dataCell.innerHTML = cellValues[j][elements[k]]; 
            }
        }
      }  
   }
   selector.appendChild(tbl);
}
  
 if(document.querySelector('#MLPtable') == null){
    createTable("Motor Legal Protection","legalCover","MLPtable");
    document.querySelectorAll("#MLPtable button.initial-class")[0].innerHTML = "No, continue <br/> without Motor <br/> Legal Protection";	    
 }
 if(document.querySelector('#CHtable') == null){
    createTable("Car Hire","carHire","CHtable");
    document.querySelectorAll("#CHtable button.initial-class")[0].innerHTML = "No, continue <br/> without <br/> Car Hire"; 
 }
 if(document.querySelector('#PIBtable') == null){ 
     createTable("Personal Injury Benefit","personalInjuryCover","PIBtable");
     document.querySelectorAll("#PIBtable button.initial-class")[0].innerHTML = "No, continue <br/> without Personal <br/> Injury benefit";
 }
  if(document.querySelector('#KCtable') == null){ 
			createTable("Key Cover","keyCover","KCtable");
      document.querySelectorAll("#KCtable button.initial-class")[0].innerHTML = "No, continue <br/> without <br/> Key Cover"; 
  }
 
var addonContainer = document.querySelectorAll(".single-addon-container .addon-select-container");
for(var c=0 ;c < addonContainer.length; c++){
  addonContainer[c].classList.add('forceHide');
}
var boldText = document.querySelectorAll(".content-container .margin-top-10");
for(var b=0 ;b < boldText.length; b++){
  boldText[b].classList.add('hide');
}

var MLPCore = document.querySelectorAll("#MLPtable .coreCol");
var MLPAddon = document.querySelectorAll("#MLPtable .addonCol");
var CHCore = document.querySelectorAll("#CHtable .coreCol");
var CHAddon = document.querySelectorAll("#CHtable .addonCol"); 
var PIBCore = document.querySelectorAll("#PIBtable .coreCol");
var PIBAddon = document.querySelectorAll("#PIBtable .addonCol");
var KCCore = document.querySelectorAll("#KCtable .coreCol");
var KCAddon = document.querySelectorAll("#KCtable .addonCol");

function highlightCol(column){
  for(var m=0;m<column.length;m++){
      column[m].classList.add('selected');
  }   
}
    
if(document.querySelector("#MLPtable tr td.coreCol .initial-class.option-selected")){
 setTimeout(function(){
    highlightCol(MLPCore); 
 },150);   
}
if(document.querySelector("#MLPtable tr td.addonCol .initial-class.option-selected")){
 setTimeout(function(){
    highlightCol(MLPAddon); 
 },150);   
}
        
if(document.querySelector("#CHtable tr td.coreCol .initial-class.option-selected")){
 setTimeout(function(){
    highlightCol(CHCore); 
 },150);   
}
if(document.querySelector("#CHtable tr td.addonCol .initial-class.option-selected")){
 setTimeout(function(){
    highlightCol(CHAddon); 
 },150);   
}

if(document.querySelector("#PIBtable tr td.coreCol .initial-class.option-selected")){
 setTimeout(function(){
    highlightCol(PIBCore); 
 },150);   
}
if(document.querySelector("#PIBtable tr td.addonCol .initial-class.option-selected")){
 setTimeout(function(){
    highlightCol(PIBAddon); 
 },150);   
}
    
if(document.querySelector("#KCtable tr td.coreCol .initial-class.option-selected")){
 setTimeout(function(){
    highlightCol(KCCore); 
 },150);   
}
if(document.querySelector("#KCtable tr td.addonCol .initial-class.option-selected")){
 setTimeout(function(){
    highlightCol(KCAddon); 
 },150);   
}
  
var utils = window["optimizely"].get('utils');
var paymentPrice = document.querySelector('[data-qa-id = "actualPrice"]').innerText;
var paymentType;
var paymentMethod = document.querySelectorAll('[name="changePaymentRadio"]');
  
function paymentChange(paymentSelected){
  var paymentMethod = document.querySelectorAll('[name="changePaymentRadio"]');
  for(var p = 0;p < paymentMethod.length; p++){
    if(paymentMethod[p].checked === paymentSelected){
      //setTimeout(function(){ paymentSelection(); },200);
      paymentType = paymentMethod[p];
    }
  }
  return paymentType;
}
  
function resetAddons(){
 utils.waitUntil(function () {
  	return (document.querySelector('.main-container') && document.querySelector('.enhance-your-cover'));
}).then(function () {
  if(document.querySelector('#loading-indicator').getAttribute('style').indexOf('block') >= 0 && !(document.querySelector('#MLPtable'))){
  	setTimeout(function(){resetAddons(); },300);    
  } else{
     addonTables();
  }
});  
}
    
function NCDresetAddons(){
  utils.waitUntil(function () {
		return ( document.querySelector('.main-container') && document.querySelector("[data-qa-id='enhanceYourCover']"));
}).then(setTimeout(function () {
      if(document.querySelector('#loading-indicator').getAttribute('style').indexOf('block') >= 0){
      setTimeout(function(){NCDresetAddons(); },300);
    } else{
      setTimeout(function(){ addonTables(); },400);
    }   
  },200));
} 

function resetByPayment(){
		utils.waitUntil(function(){
   	//return(document.querySelector('.main-container') && !(document.querySelector('#drawer-wrapper-id').classList.contains('is-active')));
      return(document.querySelector('.main-container') && document.querySelector("[data-qa-id='changePaymentHeaderSection']"));
 }).then(setTimeout(function(){
      if((!(document.querySelector('#MLPtable')) && (document.querySelector('[data-qa-id="totalValue"] .total-value').innerText !== paymentPrice))){  
		  if(document.querySelector('#loading-indicator').getAttribute('style').indexOf('block') >= 0){
               console.log("Table not exsits!!!");
               document.querySelector('.ensModalBackdrop').setAttribute('style','display:block');
               setTimeout(function(){resetByPayment();},300);	
            }
      } else {
       	console.log("Table found on resetPayment!!!");
       	 setTimeout(function(){ addonTables();},400);
        document.querySelector('.ensModalBackdrop').setAttribute('style','display:none');
    }
    }),50);
}
  
  function paymentSelection(){
     document.querySelector('.drawer-cta [data-qa-id = "updateButton"]').onclick = resetByPayment;
  }

 document.querySelector('[data-qa-id="changePaymentHeaderSection"]').onclick = paymentSelection;
  
legalNegButton.onclick = resetAddons;
    
legalAffrButton.onclick = resetAddons;
        
carHireNegButton.onclick = resetAddons;
        
carHireAffrButton.onclick = resetAddons;
        
PIBNegButton.onclick = resetAddons;
  
PIBAffrButton.onclick = resetAddons;
  
keyCoverNegButton.onclick = resetAddons;
  
keyCoverAffrButton.onclick = resetAddons;
  
NCDNegButton.onclick = NCDresetAddons;
  
NCDAffrButton.onclick = NCDresetAddons;
   
}();
