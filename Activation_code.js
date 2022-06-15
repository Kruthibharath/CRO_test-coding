function jsCondition() {
  var activationCondition = false;
        if(esureDataLayer.policies){
            if (window.localStorage.pageActivation) {
                 window.localStorage.removeItem('pageActivation');
            }
            if(esureDataLayer.policies.indexOf("motor") > -1 || esureDataLayer.policies.indexOf("multicar") > -1){
                var cover_types = document.querySelectorAll('.policy-card .cover-type');
                for(var i = 0; i < cover_types.length; i++){
                    if((cover_types[i].innerText) == 'Car insurance'){
                      carPolicyEndDate = cover_types[i].offsetParent.querySelector('.end-date').textContent;
                      if(new Date() <= new Date(carPolicyEndDate)){
                        activationCondition = true;
                        window.localStorage.setItem("pageActivation", "active");
                      }
                    }
                    
                    if((cover_types[i].innerText) == 'Home insurance'){
                      homePolicyEndDate = cover_types[i].offsetParent.querySelector('.end-date').textContent;
                      if(new Date() <= new Date(homePolicyEndDate)){
                        activationCondition = false;
                          if (window.localStorage.pageActivation) {
                                    window.localStorage.removeItem('pageActivation');
                                }
                        
                      } 
                    }
                    if((cover_types[i].innerText) == 'Travel insurance'){
                      travelPolicyEndDate = cover_types[i].offsetParent.querySelector('.end-date').textContent;
                      if(new Date() <= new Date(travelPolicyEndDate)){
                        activationCondition = false;
                        if (window.localStorage.pageActivation) {
                                    window.localStorage.removeItem('pageActivation');
                                }
                      } 
                    }
                }
            }
         
   }
    if(window.location.href.match('https://www.esure.com/my-account/portal/(.*)')||window.location.href.match('https://www.esure.com/my-account/auth/(.*)')){
               if((window.localStorage.getItem('pageActivation') === 'active')){
                console.log('Entered location checking!!!');
                    activationCondition = true;
                }
        	}
  if(activationCondition == true){
  	return true;
  }
}   

function jsCondition() {
  console.log('#JS1 Ran Javascript condition starting!!');
  var activationCondition = false;
        if(esureDataLayer.policies){
            if(esureDataLayer.policies.indexOf("motor") > -1 || esureDataLayer.policies.indexOf("multicar") > -1){
                var cover_types = document.querySelectorAll('.policy-card .cover-type');
                for(var i = 0; i < cover_types.length; i++){
                    if((cover_types[i].innerText) == 'Car insurance'){
                      carPolicyEndDate = cover_types[i].offsetParent.querySelector('.end-date').textContent;
                      if(new Date() <= new Date(carPolicyEndDate)){
                        activationCondition = true;
                        window.localStorage.setItem("pageActivation", "active");
                      }
                    }
                    if((cover_types[i].innerText) == 'Home insurance'){
                      homePolicyEndDate = cover_types[i].offsetParent.querySelector('.end-date').textContent;
                      if(new Date() <= new Date(homePolicyEndDate)){
                        activationCondition = false;
                          if (window.localStorage.pageActivation) {
                              window.localStorage.removeItem('pageActivation');
                            }                       			
                          console.log('#JS2 - Home Insurance(after removed):' +window.localStorage.pageActivation);     
                      } 
                    }
                    if((cover_types[i].innerText) == 'Travel insurance'){
                      travelPolicyEndDate = cover_types[i].offsetParent.querySelector('.end-date').textContent;
                      if(new Date() <= new Date(travelPolicyEndDate)){
                        activationCondition = false;
                        if (window.localStorage.pageActivation) {
                            window.localStorage.removeItem('pageActivation');
                        }
                      } 
                    }
                }
            }
         
   }
   if(window.location.href.match('https://www.esure.com/my-account/portal/(.*)')){ 
     if((window.localStorage.getItem('pageActivation') === 'active')){
       console.log('#JS3 Entered 1st portal *  URL location checking111');
       activationCondition = true;      
     }
   }
  if(window.location.href.match('https://www.esure.com/my-account/auth/(.*)')){
    if((window.localStorage.getItem('pageActivation') === 'active')){
        console.log('#JS4 Entered 2nd  auth *  URL location checking111');
       activationCondition = true;
    }
  }
  if(activationCondition == true){
    console.log('#JS5 Handing over to the Experiment!!');
  	return true;
  }
  console.log('#JS6 Ran Javascript condition ending!!');
} 

function jsCondition() {
   console.log('#JS1 Ran Javascript condition starting!!');
  var activationCondition = false;
        if(esureDataLayer.policies){
            if(esureDataLayer.policies.indexOf("motor") > -1 || esureDataLayer.policies.indexOf("multicar") > -1){
                var cover_types = document.querySelectorAll('.policy-card .cover-type');
                for(var i = 0; i < cover_types.length; i++){
                    if((cover_types[i].innerText) == 'Car insurance'){
                      carPolicyEndDate = cover_types[i].offsetParent.querySelector('.end-date').textContent;
                      if(new Date() <= new Date(carPolicyEndDate)){
                        activationCondition = true;
                        window.localStorage.setItem("pageActivation", "active");
                        console.log('#JS2 Entered Live Motor URL location checking111');
                      }
                    }
                    if((cover_types[i].innerText) == 'Home insurance'){
                      homePolicyEndDate = cover_types[i].offsetParent.querySelector('.end-date').textContent;
                      if(new Date() <= new Date(homePolicyEndDate)){
                        activationCondition = false;
                          if (window.localStorage.pageActivation) {
                              window.localStorage.removeItem('pageActivation');
                            }                       			     
                      } 
                    }
                    if((cover_types[i].innerText) == 'Travel insurance'){
                      travelPolicyEndDate = cover_types[i].offsetParent.querySelector('.end-date').textContent;
                      if(new Date() <= new Date(travelPolicyEndDate)){
                        activationCondition = false;
                        if (window.localStorage.pageActivation) {
                            window.localStorage.removeItem('pageActivation');
                        }
                      } 
                    }
                }
            }
         
   }
   if(window.location.href.match('https://www.esure.com/my-account/portal/(.*)')){ 
     if((window.localStorage.getItem('pageActivation') === 'active')){
        console.log('#JS3 Entered 1st  portal *  URL location checking111');
       activationCondition = true;      
     }
   }
  if(window.location.href.match('https://www.esure.com/my-account/auth/(.*)')){
    if((window.localStorage.getItem('pageActivation') === 'active')){
        console.log('#JS4 Entered 2nd  auth *  URL location checking111');
       activationCondition = true;
    }
  }
  
  if(activationCondition == true){
     console.log('#JS5 Handing over to the Experiment!!');
  	return true;
  }
   console.log('#JS6 Ran Javascript condition ending!!');
}