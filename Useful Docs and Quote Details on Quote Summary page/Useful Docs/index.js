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
    
    var docsLinks = {
        init : function(){  
        var $_ = this;
            $_.page();

        },
      	page: function(){
            var heading = '<h1>Useful links and documents</h1>';
            var listOfLinks = '<p>To see whether this cover is right for you, please see the links below. It was designed to cover you against unforeseen                       costs of fire, theft or accidental damage.</p>'+
                                    '<ul id="usefulLinks"><li><a target="_blank" href="/ipids/cache/09052018/EM-IPID-MotorComprehensive.pdf">Insurance Product Information Document</a> - A bite-sized summary of your cover.</li>'+
                                    '<li><a title="Policy booklet PDF" target="_blank" class="pdf" href="/pages/product/motor/latest/policyBooklet">Policy Booklet</a> - Full details of your cover features, limits, exclusions and terms & conditions.</li>'+
                                    '<li><a target="_blank" href="http://www.esure.com/policy-booklets#motor">Your Agreement with esure Services Limited</a> - A clear breakdown of all our service charges e.g. admin fees.</li>'+
                                    '<li><input id="viewPaymentOptionsButton" type="submit" target="_blank" name="viewPaymentOptionsButton" value="Your payment options" class="esjs_recalcLink"> - Confused about our annual or monthly prices? See more details here.</li></ul>';
                             
            function usefulDocsLinks(){
                $('#policy-cover-motor1 h1')[0].hide();
                $('#policy-cover-motor1 p:lt(3)').hide();
                $(heading).prependTo('.policy-area-cover-right-mt');
                $(listOfLinks).appendTo('.policy-area-cover-right-mt');        
            }
            usefulDocsLinks();
            
            var pageCSS =''+
            'ul#usefulLinks { font-size: 0.95em; }'+
            'ul#usefulLinks li {padding: 5px 0px;}'+
            'input#viewPaymentOptionsButton {margin: 0px !important;}';
           
            var headofdoc = document.getElementsByTagName('head')[0];
            var s = document.createElement('style');
            s.setAttribute('type', 'text/css');
            s.appendChild(document.createTextNode(pageCSS));
            headofdoc.appendChild(s);
            }
        };


  try { 
    //* call variation
    docsLinks.init();
    //* stop loading page after 1 second
    setTimeout(function(){
      redTag.loadingBar(false);
    }, 400);
  }
  catch(err) { 
    redTag.loadingBar(false); 
  }
    
})();
