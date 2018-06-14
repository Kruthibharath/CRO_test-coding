/* _optimizely_evaluate=force */
    window.redTag = {
        loadingBar: function(activeElement) {
            var D = document;
            if(activeElement){
      var loadingHTMl = '<div id="loading" style="width: 100%; background: rgba(255, 255, 255, 0.98); display: block; height: 2500em; min-height: 100%; position: fixed; top: 0px; left: 0px; z-index: 9999;">';
        loadingHTMl += '<div class="loadingCnt" style="margin-top: 140px">';
        loadingHTMl += '<img src="https://www.esure.com/cs/groups/visual/@wcm/documents/webasset/logo.png" alt="loading" style="display: block; margin: 0px auto;"/>';
        loadingHTMl += '<h4 style="font-family: MuseoSansRounded-300,Arial,Verdana; font-size: 18px; margin: 10px 0px 10px 0px; text-align: center; position: relative; z-index: 99999; text-indent: 20px;">Please wait...</h4>';
        loadingHTMl += '<img src="https://cdn.optimizely.com/img/288696407/fa9869a883db42bbb9413bf195202265.gif" style=" width: 50px; display: block; margin: 0px auto;" />';
        loadingHTMl += '</div>';
        loadingHTMl += '<div>';
                var first = D.body.children[0];
                var beforeEle = D.createElement("div");
                beforeEle.innerHTML = loadingHTMl;
                D.body.insertBefore(beforeEle, first);
            } else {
                if (D.getElementById("loading") !== null) {
                    D.getElementById("loading").outerHTML = "";
                }
            }
        }
    };
   
   function checkifbodyexist() {
    setTimeout(function(){
      if ( document.getElementsByTagName('body')[0] !== null ) {
        redTag.loadingBar(true);
      } else {
        checkifbodyexist();
      }
    }, 5);
    
   }
   checkifbodyexist();
/* _optimizely_evaluate=safe */


(function(){
	var $ = window.jQuery;
    
    var quoteSummary = {
        init : function(){  
        var $_ = this;
            $_.page();

        },
      	page: function(){
            var x, y;
            var licenceType = function(x){
                var abbrLicenceType = esureDataLayer.policyHolderLicenceType;
                switch(abbrLicenceType){
                    case 'UKA': return 'Full UK (Automatics Only)';
                    case 'UK': return 'Full UK';
                    case 'PUK': return 'Provisional UK';
                    case 'EC': return 'Full European';    
                    case 'ECP': return 'Provisional European';
                    case 'INT': return 'Non UK/European';
                    case 'OTH': return 'Other';
                } 
            };
            
            var coverType = function(y){
                var abbrCoverType = esureDataLayer.motorCoverType;
                if( abbrCoverType === 'COM'){
                    return 'Fully Comprehensive';
                } else{
                    return 'Third Party, Fire and Theft';
                }
            };


            var qs = '<div id="quote_summary"><ul class="with-bullets including">'+
                        '<li style="margin-left:20px;"><h2>Quote Summary</h2></li>'+
                         '<li>Your details:<span>'+
                            '<ul id="personalDetails" class="with-bullets including">'+
                                '<li>'+ esureDataLayer.policyHolderTitle +' '+ esureDataLayer.policyHolderFirstNames +' '+ esureDataLayer.policyHolderLastName + '</li>'+
                                 '<li>'+ esureDataLayer.policyHolderHouseNumber +' '+ esureDataLayer.policyHolderHouseStreet +' '+ esureDataLayer.policyHolderLastName + '</li>'+
                                 '<li>'+ esureDataLayer.policyHolderHousePostalTown  +'</li>'+
                                 '<li>'+ esureDataLayer.policyHolderPostcode  +'</li>'+
                            '</ul>'+
                        '</span></li>'+
                        '<li>No. of No Claims Discount years:<span>'+esureDataLayer.policyHolderMotorNCDYears+' Years</span></li>'+
                        '<li>License type:<span id="licence"></span></li>'+
                        '<li>Car make:<span>'+esureDataLayer.carMake+'</span></li>'+
                        '<li>Car model:<span>'+esureDataLayer.carModel+'</span></li>'+
                        '<li>Quote ID:<span>'+esureDataLayer.quoteID+'</span></li>'+
                        '<li>Car registration:<span>'+esureDataLayer.carRegistration +'</span></li>'+
                        '<li>Cover type:<span id="cover"></span></li>'+
                    '</ul></div>';
            var editText = '<div id="edit">You can edit these details later</div>';
            
            function addQS(){
                    $(qs).insertAfter('#cover-details');
                    var lt = licenceType();
                    $('#licence').text(lt);
                    var ct = coverType();
                    $('#cover').text(ct);
                    $(editText).insertAfter('#quote_summary');
            }
            addQS();
            
            var pageCSS =''+
            '#quote_summary ul.including li{width: 45%; margin-right:3% !important; margin-left: 2%; }'+
            '#quote_summary h2{font-size: 24px;color: #0971b0;font-weight: 400;font-family: MuseoSansRounded-700;margin: 0.5em 0; padding-right: 0;}'+
            '#quote_summary ul.including li:last-child{display:block;}'+
            '#quote_summary{background:#f3f0ec;font: 400 100% Verdana, Arial, Helvetica, sans-serif;min-height: 12em;font-size: 18px;}'+
            '#quote_summary ul li span{float:right;color:#0971b0;font-weight:600;}'+
            'ul#personalDetails li{float:right; width:100% !important; clear:both; text-align:end; margin-right:0 !important;}'+
            '#edit{float:right; color:#a4a4a4; font-family: "MuseoSansRounded-500", Arial, Helvetica; font-size:14px;}';

            var headofdoc = document.getElementsByTagName('head')[0];
            var s = document.createElement('style');
            s.setAttribute('type', 'text/css');
            s.appendChild(document.createTextNode(pageCSS));
            headofdoc.appendChild(s);
            }
        };


  try { 
    //* call variation
    quoteSummary.init();
    //* stop loading page after 1 second
    setTimeout(function(){
      redTag.loadingBar(false);
    }, 400);
  }
  catch(err) { 
    redTag.loadingBar(false); 
  }
    
})();
