void function autoRenewalBenefits() {
  if (!(document.querySelector('.container'))) return setTimeout(autoRenewalBenefits, 350);
  
  var benefitTick = '<svg version="1.1" width="16px" height="16px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"><g><g><circle class="st0" cx="16" cy="16" r="16" style="fill-rule:evenodd;clip-rule:evenodd;fill:#89BC34;"/></g><polygon class="st1" points="22.4,9 13.7,17.9 9.6,13.7 7.1,16.2 13.7,23 24.9,11.5" style="fill:#FFFFFF;"/></g></svg>';
  
  var benefitsList = "<ul id='ARBenefits'><li class='benefitList'>We won't change a higher premium to a renewing customer than we would for a brand new customer with same details and level of cover.</li><li class='benefitList'>Peace of mind that your home will always be covered and you will not be left without your most valuable possessions being insured.</li><li class='benefitList'>You will be made aware when your policy is due to automatically renew,3 to 4 weeks before renewal, so if you don't want to renew you can do this quickly and easily.</li></ul>";
  
  var benefitsDiv = document.createElement("div");
  benefitsDiv.setAttribute('id','benefits');
  benefitsDiv.innerHTML = benefitsList ;
  var benefitText = document.createElement("span");
	benefitText.innerHTML = "If auto renewing your policy, some benefits to consider are:";
	benefitsDiv.prepend(benefitText);
  var reference = document.querySelector(".read-more-section");
  reference.parentElement.insertBefore(benefitsDiv,reference);

  function appendIcons(benefit,icon){
    var cc_icon_holder = document.createElement('span');
    cc_icon_holder.classList.add("benefit_icons");
    cc_icon_holder.innerHTML = icon;
    benefit.prepend(cc_icon_holder); 
  }
  appendIcons(document.querySelectorAll("#ARBenefits li")[0],benefitTick);
  appendIcons(document.querySelectorAll("#ARBenefits li")[1],benefitTick);
  appendIcons(document.querySelectorAll("#ARBenefits li")[2],benefitTick);
  
}();


------------------------------------- CSS --------------------------------------------------
#ARBenefits{
  margin: 15px 0;
}
#benefits{
  margin-top: 10px;
}
.benefitList{
  display: flex;
}
.benefit_icons{
  margin-right: 10px;
}
.benefitList:nth-child(2),.benefitList:nth-child(3){
  margin-top:10px;
}