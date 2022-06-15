void function AROptOut() {
  if (!(document.querySelector('.content-wrapper '))) return setTimeout(AROptOut, 25);
  document.querySelector('#opt-toggle').click();
  document.querySelector("#opt-toggle").parentElement.innerText = "It goes without saying, you can decide if you want to auto-renew or not.";
  document.querySelector("[data-qa-id='optOutYellowBoxText']").innerText = "Would you like this policy to auto renew? You can also stop your policy automatically renewing at any time in your online account or by phone.";
   var warningIcon = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 283.46 283.46" style="enable-background:new 0 0 283.46 283.46;" xml:space="preserve"><style type="text/css">.st0{fill:#CF021A;}</style><g><path class="st0" d="M141.48,21.64c66.57,1.04,120.08,51.84,120.17,120.08c0.09,67.88-53,119.97-119.92,120.09 c-70.28,0.13-119.77-57.87-119.93-119.64C21.65,80.05,71.19,22.7,141.48,21.64z M141.71,43.5c-54.13-0.01-98.32,44.06-98.38,98.11 c-0.06,54.36,44.04,98.58,98.31,98.59c54.13,0.01,98.32-44.06,98.38-98.11C240.09,87.73,195.99,43.51,141.71,43.5z"/> <path class="st0" d="M127.13,119.31c0-10.38-0.03-20.76,0.01-31.15c0.04-8.34,3.96-12.73,12.29-13.12 c3.32-0.15,6.85,0.34,9.99,1.41c4.17,1.41,6.73,4.68,6.74,9.32c0.05,22.27,0.11,44.53-0.01,66.8c-0.03,5.75-3.64,9.88-9.87,10.77 c-3.78,0.54-7.91,0.09-11.65-0.83c-5.08-1.26-7.5-5.11-7.49-10.41c0.02-10.93,0.01-21.86,0.01-32.78 C127.14,119.31,127.13,119.31,127.13,119.31z"/><path class="st0" d="M156.06,194.3c0.04,8.38-6.06,14.59-14.35,14.61c-8.11,0.02-14.35-6.1-14.42-14.14 c-0.07-8.32,6.08-14.57,14.37-14.59C149.77,180.16,156.02,186.3,156.06,194.3z"/></g></svg>';
  var newLabelElement = document.createElement('label');
  newLabelElement.innerText = "No thanks, cancel at renewal";
  var newInput = document.createElement('input');
  newInput.setAttribute("type","checkbox");
  newInput.setAttribute("id","negetive-autorenewal-checkbox");
  var newSpan1 = document.createElement('span');
  newSpan1.setAttribute("class","autorenewal-checkmark");
  newSpan1.setAttribute("id","cancel-autorenewal-checkmark");
  newLabelElement.append(newInput);
  newLabelElement.append(newSpan1);
  newLabelElement.setAttribute("id","noToRenewal-checkbox-wrapper");
  newLabelElement.classList.add('renewal-checkbox-wrapper');
  var promptEle = document.createElement('div');
  promptEle.setAttribute('class','promptMsg');
  promptEle.classList.add('hide');
  var date = new Date(esureDataLayer.policyStartDate);
  next_date = new Date(date.setDate(date.getDate() + 364));
  var renewalDate = next_date.toLocaleDateString();
  var spanWarningIcon = document.createElement('span');
  var spanWarningWordings = document.createElement('span');
  spanWarningWordings.innerText = "After " +renewalDate+ " your home will no longer be covered. Please remember, some mortgage providers may require continuous home insurance as part of their lending criteria.";
  spanWarningIcon.innerHTML = warningIcon;
  promptEle.append(spanWarningIcon);
  promptEle.append(spanWarningWordings);
  //newLabelElement.append(promptEle);   
  document.querySelector('.opt-renewal-wrapper').appendChild(newLabelElement);
  document.querySelector('.opt-renewal-wrapper').appendChild(promptEle);
  
  var autoRenewalCheckbox = document.querySelectorAll(".renewal-checkbox-wrapper >input[type='checkbox']")[0];
  var NoToRenewalCheckbox = document.querySelector("#negetive-autorenewal-checkbox");
  
  function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    if(getCookie("noAutoRenewal")){
      NoToRenewalCheckbox.checked = true;
      autoRenewalCheckbox.checked = false;
      document.cookie = "noAutoRenewal=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    } 
  
  
 /* if((window.localStorage.getItem('noAutoRenewal') === 'active')){
     NoToRenewalCheckbox.checked = true;
  }*/

  autoRenewalCheckbox.addEventListener("click",function(){
    autoRenewalCheckbox.checked = true;
    if( NoToRenewalCheckbox.checked){
      NoToRenewalCheckbox.checked = false;
      document.querySelector(".promptMsg").classList.add('hide');
    }
    /*if (window.localStorage.noAutoRenewal) {
      window.localStorage.removeItem('noAutoRenewal');
    }*/
  });
  
  NoToRenewalCheckbox.onClick = function(){
     if(autoRenewalCheckbox.checked){
      autoRenewalCheckbox.click();
      selectNoToRenewalCheckbox();
    } 
  };
  function selectNoToRenewalCheckbox(){
    //NoToRenewalCheckbox.addEventListener("click",function(){
    autoRenewalCheckbox.checked = false;
    NoToRenewalCheckbox.checked = true;
    document.cookie="noAutoRenewal=true";
    //window.localStorage.setItem("noAutoRenewal", "active");
    document.querySelector(".promptMsg").classList.remove('hide');  
  //}); 
}


}();

console.log("variation");


----------------------************* Final working code *******************-------------------------------
void function AROptOut() {
   if (!(document.querySelector('.content-wrapper')) && esureDataLayer.pageName !== 'HOME Final Check') return setTimeout(AROptOut, 2500);
  setTimeout(function(){
  document.querySelector('#opt-toggle').click();
  document.querySelector("#opt-toggle").parentElement.innerText = "It goes without saying, you can decide if you want to auto-renew or not.";
  document.querySelector("[data-qa-id='optOutYellowBoxText']").innerText = "Would you like this policy to auto renew? You can also stop your policy automatically renewing at any time in your online account or by phone.";
   var warningIcon = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 283.46 283.46" style="enable-background:new 0 0 283.46 283.46;" xml:space="preserve"><style type="text/css">.st0{fill:#CF021A;}</style><g><path class="st0" d="M141.48,21.64c66.57,1.04,120.08,51.84,120.17,120.08c0.09,67.88-53,119.97-119.92,120.09 c-70.28,0.13-119.77-57.87-119.93-119.64C21.65,80.05,71.19,22.7,141.48,21.64z M141.71,43.5c-54.13-0.01-98.32,44.06-98.38,98.11 c-0.06,54.36,44.04,98.58,98.31,98.59c54.13,0.01,98.32-44.06,98.38-98.11C240.09,87.73,195.99,43.51,141.71,43.5z"/> <path class="st0" d="M127.13,119.31c0-10.38-0.03-20.76,0.01-31.15c0.04-8.34,3.96-12.73,12.29-13.12 c3.32-0.15,6.85,0.34,9.99,1.41c4.17,1.41,6.73,4.68,6.74,9.32c0.05,22.27,0.11,44.53-0.01,66.8c-0.03,5.75-3.64,9.88-9.87,10.77 c-3.78,0.54-7.91,0.09-11.65-0.83c-5.08-1.26-7.5-5.11-7.49-10.41c0.02-10.93,0.01-21.86,0.01-32.78 C127.14,119.31,127.13,119.31,127.13,119.31z"/><path class="st0" d="M156.06,194.3c0.04,8.38-6.06,14.59-14.35,14.61c-8.11,0.02-14.35-6.1-14.42-14.14 c-0.07-8.32,6.08-14.57,14.37-14.59C149.77,180.16,156.02,186.3,156.06,194.3z"/></g></svg>';
  var newLabelElement = document.createElement('label');
  newLabelElement.innerText = "No thanks, cancel at renewal";
  var newInput = document.createElement('input');
  newInput.setAttribute("type","checkbox");
  newInput.setAttribute("id","negetive-autorenewal-checkbox");
  var newSpan1 = document.createElement('span');
  newSpan1.setAttribute("class","autorenewal-checkmark");
  newSpan1.setAttribute("id","cancel-autorenewal-checkmark");
  newLabelElement.append(newInput);
  newLabelElement.append(newSpan1);
  newLabelElement.setAttribute("id","noToRenewal-checkbox-wrapper");
  newLabelElement.classList.add('renewal-checkbox-wrapper');
  var promptEle = document.createElement('div');
  promptEle.setAttribute('class','promptMsg');
  promptEle.classList.add('hide');
  var date = new Date(esureDataLayer.policyStartDate);
  next_date = new Date(date.setDate(date.getDate() + 364));
  var renewalDate = next_date.toLocaleDateString();
  var spanWarningIcon = document.createElement('span');
  var spanWarningWordings = document.createElement('span');
  spanWarningWordings.innerText = "After " +renewalDate+ " your home will no longer be covered. Please remember, some mortgage providers may require continuous home insurance as part of their lending criteria.";
  spanWarningIcon.innerHTML = warningIcon;
  promptEle.append(spanWarningIcon);
  promptEle.append(spanWarningWordings);   
  document.querySelector('.opt-renewal-wrapper').appendChild(newLabelElement);
  document.querySelector('.opt-renewal-wrapper').appendChild(promptEle);
  
  var autoRenewalCheckbox = document.querySelectorAll(".renewal-checkbox-wrapper >input[type='checkbox']")[0];
  var NoToRenewalCheckbox = document.querySelector("#negetive-autorenewal-checkbox");
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  if(getCookie("noAutoRenewal") === "true"){
    NoToRenewalCheckbox.checked = true;
    autoRenewalCheckbox.checked = false;
  } else {
    NoToRenewalCheckbox.checked = false;
    autoRenewalCheckbox.checked = true;
  } 

  autoRenewalCheckbox.addEventListener("click",function(){
    esureDataLayer.homeAutorenewalStatus = 'OptedIn';
    autoRenewalCheckbox.checked = true;
    document.cookie="noAutoRenewal=false";
    if( NoToRenewalCheckbox.checked){
      NoToRenewalCheckbox.checked = false;
      document.querySelector(".promptMsg").classList.add('hide');
    }
  });
  
  NoToRenewalCheckbox.addEventListener("click",function(){
    esureDataLayer.homeAutorenewalStatus = 'OptedOut';
    autoRenewalCheckbox.checked = false;
    NoToRenewalCheckbox.checked = true;
    document.cookie="noAutoRenewal=true";
    document.querySelector(".promptMsg").classList.remove('hide');  
  });       
  },2000);
}();

------------------------------------ CSS --------------------------------------------------------

#noToRenewal-checkbox-wrapper{ 
  margin-top: 10px; 
  padding: 5px 35px;
} 
.promptMsg{
  color: #CF021A;
  margin-top: 10px;
} 
.hide{
  display: none;
}
#Layer_1{
  height: 20px;
  margin: 5px 8px 0 0;
  vertical-align: sub;
}

