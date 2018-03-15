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
    
    var recalcHideShow = {
        init : function(){  
        var $_ = this;
            $_.page();

        },
      	page: function(){
            var ncdSelected = esureDataLayer.ncdProtection;
            var selectedBundle = esureDataLayer.quotedBundleNumber;
            var selectedBreakdown = esureDataLayer.breakdownPricePence;
            var selectedMVE = esureDataLayer.motorVoluntaryExcess;
            var enabledNextButton = '<span id="noRecalc"><input id="next" type="submit" name="next" value="Next" class="go-to-next"></span>';

           var runReload = function(){
                $('#recalculate').trigger("click");
                document.cookie='reload=OnClick';
             	
            };
            if (document.cookie.indexOf("reload") >= 0) { 
              $("#next").trigger('click'); 
              document.cookie='reload=;expires=Sat, 01-Jan-1974 00:00:00 GMT';
            }
            
            function noRecalcNextClicked(){
               $('#noRecalc').click(function(){
                setTimeout(function(){
                    runReload();
                }, 400);
                }); 
            }
          
          
            /*********** Show/Hide functionality of Recalculate Button *********************/

            function showRecalculate(){
                $('div.recalcPosition:hidden').show();
                $('#recalculate').show();
                $('#nextDisabled').show();
                $('#noRecalc').hide();
            }

            function hideRecalculate(){
                $('.recalcPosition').hide();
                $('#recalculate').hide();
                $('#nextDisabled').hide();
                if($('#noRecalc').is(':hidden')){
                    $('#noRecalc').show(); 
                } else {
                    $('#nextButtonRegion').append(enabledNextButton);
                }
            		noRecalcNextClicked();
            }

          /***********  Boost your Cover Section *********************/

            $('#bundle1 #radio_bundleSelectRadio_1').click(function(){
                if($(this)[0].id === ("radio_bundleSelectRadio_"+selectedBundle)){
                    if(!($('.ncd-protection-radiobutton').hasClass('active-radiobutton'))){
                       if(JSON.parse(ncdSelected)){
                            showRecalculate();
                        } else {
                            hideRecalculate();
                        }
                   } else {
                        if(JSON.parse(ncdSelected)){
                            hideRecalculate();
                        } else {
                            showRecalculate();
                        }
                   }
                } else {
                    showRecalculate();
                }
            });
            $('#bundle2 #radio_bundleSelectRadio_2').click(function(){
               if($(this)[0].id === ("radio_bundleSelectRadio_"+selectedBundle)){
                 if(!($('.ncd-protection-radiobutton').hasClass('active-radiobutton'))){
                       if(JSON.parse(ncdSelected)){
                            showRecalculate();
                        } else {
                            hideRecalculate();
                        }
                   } else {
                        if(JSON.parse(ncdSelected)){
                            hideRecalculate();
                        } else {
                            showRecalculate();
                        }
                   }
                } else {
                    showRecalculate();
                }
            });
            $('#bundle3 #radio_bundleSelectRadio_3').click(function(){
               if($(this)[0].id === ("radio_bundleSelectRadio_"+selectedBundle)){
                  if(!($('.ncd-protection-radiobutton').hasClass('active-radiobutton'))){
                       if(JSON.parse(ncdSelected)){
                            showRecalculate();
                        } else {
                            hideRecalculate();
                        }
                   } else {
                        if(JSON.parse(ncdSelected)){
                            hideRecalculate();
                        } else {
                            showRecalculate();
                        }
                   }
                } else {
                    showRecalculate();
                } 
            });

            $('#bundle4 #radio_bundleSelectRadio_4').click(function(){
                if($(this)[0].id === ("radio_bundleSelectRadio_"+selectedBundle)||("radio_bundleSelectRadio_0" ===("radio_bundleSelectRadio_"+selectedBundle))){
                   if(!($('.ncd-protection-radiobutton').hasClass('active-radiobutton'))){
                       if(JSON.parse(ncdSelected)){
                            showRecalculate();
                        } else {
                            hideRecalculate();
                        }
                   } else {
                        if(JSON.parse(ncdSelected)){
                            hideRecalculate();
                        } else {
                            showRecalculate();
                        }
                   }
                } else {
                    showRecalculate();
                }
            });

            /***********  NCD Protection Section *********************/

            $('.ncd-protection-radiobutton').click(function(){
                if(!($('.ncd-protection-radiobutton').hasClass('active-radiobutton'))){
                    if(("bundle0" === ('bundle'+selectedBundle))){
                       if( ($('.active-addon').attr('id')) === ('bundle4') ){
                            hideRecalculate();
                        } else {
                            showRecalculate();
                        }
                    }
                    else if(($('.active-addon').attr('id') !== ('bundle'+selectedBundle))){
                         showRecalculate(); 
                    } else {
                         if(  JSON.parse(ncdSelected) ){
                            showRecalculate();
                        } else {
                            hideRecalculate();
                        } 
                    }  
                } else {
                    if(($('.active-addon').attr('id') !== ('bundle'+selectedBundle))){
                          showRecalculate();
                    } else {
                        if( JSON.parse(ncdSelected) ){
                            hideRecalculate();
                        } else {
                            showRecalculate();
                        }
                    }
                }  
            });	
	

            /***********  Your Excesses Section *********************/

            $('#voluntaryExcessLimit').change(function(){
                if($('#voluntaryExcessLimit option:selected').text() == ('£'+selectedMVE)){
                    hideRecalculate();
                } else {
                    showRecalculate();
                }
            });

            /***********  Breakdown Cover Page  *********************/
						  function toggleRecalculate(){
                  if(selectedBreakdown == "0"){
                       hideRecalculate();
                   } else {
                       showRecalculate();
                   }
            }
           
            $('#uniform-breakdownCover_0').click(function(){
               if(selectedBreakdown == "6811"){
                   hideRecalculate();
               } else {
                   showRecalculate();
               }
            });

            $('#uniform-breakdownCover_1').click(function(){
               if(selectedBreakdown == "9261"){
                   hideRecalculate();
               } else {
                   showRecalculate();
               }
            });

            $('#uniform-breakdownCover_2').click(function(){
               if(selectedBreakdown == "11441"){
                   hideRecalculate();
               } else {
                   showRecalculate();
               }
            });

            $('#uniform-breakdownCover_3').click(function(){
              setTimeout(function(){
                toggleRecalculate();
              }, 400);   
            });
        }
    };


  try { 
    //* call variation
    recalcHideShow.init();
    //* stop loading page after 1 second
    setTimeout(function(){
      redTag.loadingBar(false);
    }, 400);
  }
  catch(err) { 
    redTag.loadingBar(false); 
  }
    
})();
