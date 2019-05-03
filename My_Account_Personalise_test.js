(function(){
  var $ = window.jQuery;

  var Personalization = {

  init: function(){
    var $_ = this;
    $_.globalType1();
 
  },
    
  globalType1: function(){
  
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
      
    function checkCookie(){
        if(window.location.href.indexOf("offers") > -1){
            if(document.cookie.indexOf("policies") >= 0){
               var policies =  getCookie("policies");
               if (policies === 'undefined') {
                setTimeout(function(){
                   document.getElementById("nav-policies").click();
                   document.cookie = "policies = "+esureDataLayer.policies+";path=/;expires=0";
                   document.getElementById("nav-offers").click();
                   PersonalizationCrossSell();
                },600);
               } 
                   else {
                   document.cookie = "policies = "+esureDataLayer.policies+";path=/;expires=0";  
                }
            } else {
               document.cookie = "policies = "+esureDataLayer.policies+";path=/;expires=0"; 
            } 
        }
    }
    
    window.onload = checkCookie();

    document.getElementById("nav-policies").onclick = function(){
      document.cookie = "policies = "+esureDataLayer.policies+";path=/;expires=0";
    };
    
    document.getElementById("nav-account").onclick = function(){
        document.cookie = "policies = "+esureDataLayer.policies+";path=/;expires=0";           
   	};
      
    document.getElementById("nav-offers").onclick = function(){
        document.cookie = "policies = "+esureDataLayer.policies+";path=/;expires=0"; 
      	PersonalizationCrossSell();
    };
      
     if(window.location.href.indexOf("offers") > -1){
        setTimeout(function(){
            document.cookie = "policies = "+esureDataLayer.policies+";path=/;expires=0";
            PersonalizationCrossSell();
        },400);   
    }
     
      function PersonalizationCrossSell(){
          
        var divs =  getCookie("policies");
        console.log(divs);
        
        if(window.location.href.indexOf("offers") > -1){
            setTimeout(function(){
               document.cookie = "policies = "+esureDataLayer.policies+";path=/;expires=0";
            },400);
        }
          
        if((divs.indexOf('motor') > -1) && (divs.indexOf('home') > -1)){
            document.cookie = "motor_and_home = true;path=/;expires=0";
            document.cookie = "motor_not_home = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "home_not_motor = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "multicar_not_home = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "multicar_and_home = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
        }
        if((divs.indexOf('motor') > -1) && !(divs.indexOf('home') > -1)){
            document.cookie = "motor_not_home = true;path=/;expires=0";
            document.cookie = "motor_and_home = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "home_not_motor = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "multicar_not_home = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "multicar_and_home = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
        }
        
        if( (divs.indexOf('home') > -1) && !(divs.indexOf('motor') > -1)) {
            document.cookie = "home_not_motor = true;path=/;expires=0";
            document.cookie = "motor_and_home = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "motor_not_home = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "multicar_not_home = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "multicar_and_home = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
           
        }
       
        if((divs.indexOf('multicar') > -1) && !(divs.indexOf('home') > -1)){
            document.cookie = "multicar_not_home = true;path=/;expires=0";
            document.cookie = "motor_and_home = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "motor_not_home = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "home_not_motor = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "multicar_and_home = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
        }
       
        if((divs.indexOf('multicar') > -1) && (divs.indexOf('home') > -1)){
            document.cookie = "multicar_and_home = true;path=/;expires=0";
            document.cookie = "motor_and_home = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "motor_not_home = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "home_not_motor = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "multicar_not_home = ;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
        }
      
        if (document.cookie.indexOf("motor_and_home") >= 0) {
            document.getElementsByClassName('home-one')[0].parentElement.style.display='none';
            document.getElementsByClassName('motor')[0].parentElement.style.display='none';
        }
        if (document.cookie.indexOf("motor_not_home") >= 0) {
            document.getElementsByClassName('motor')[0].parentElement.style.display='none';
            document.getElementsByClassName('multicar-one')[0].parentElement.style.width='33.33%';
            document.getElementsByClassName('home-one')[0].parentElement.style.width='33.33%';
            document.getElementsByClassName('travel')[0].parentElement.style.width='33.33%'; 
            document.getElementsByClassName('container ng-trigger ng-trigger-routerTransition')[0].style.maxWidth = '100%';
        }
        if (document.cookie.indexOf("home_not_motor") >= 0) {
            document.getElementsByClassName('home-one')[0].parentElement.style.display='none';
            document.getElementsByClassName('multicar-one')[0].parentElement.style.width='33.33%';
            document.getElementsByClassName('motor')[0].parentElement.style.width='33.33%';
            document.getElementsByClassName('travel')[0].parentElement.style.width='33.33%'; 
            document.getElementsByClassName('container ng-trigger ng-trigger-routerTransition')[0].style.maxWidth = '100%';
        }
        if (document.cookie.indexOf("multicar_not_home") >= 0) {
            document.getElementsByClassName('multicar-one')[0].parentElement.style.display='none';
            document.getElementsByClassName('motor')[0].parentElement.style.display='none';
        }
        if (document.cookie.indexOf("multicar_and_home") >= 0) {
            document.getElementsByClassName('multicar-one')[0].parentElement.style.display='none';
            document.getElementsByClassName('motor')[0].parentElement.style.display='none';
            document.getElementsByClassName('home-one')[0].parentElement.style.display='none'; 
        }
      
         var pageCSS =''+
           /*********************Tablet layout *********************************/    

            '@media only screen and (max-width: 1024px) {'+
                '.column .ng-star-inserted { width: 100% !important; }'+
            '}'+ 

            '@media only screen and (max-width: 900px) {'+
                '.column .ng-star-inserted { width: 100% !important; }'+
            '}'+ 

            /****************Mobile layout [iphone 6/7/8]******************************/

           '@media screen and (max-width: 480px) {'+
              '.column .ng-star-inserted { width: 100% !important; }'+
           '}';

              var headofdoc = document.getElementsByTagName('head')[0];
              var s = document.createElement('style');
              s.setAttribute('type', 'text/css');
              s.appendChild(document.createTextNode(pageCSS));
              headofdoc.appendChild(s);
      }
    
  }

}; // end Personalization

 Personalization.init();

})();
