
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
  var gray = "#6b6a6a";
  var blue = "#0971b0";
  var light_blue = "#80C2F6";
  var light_gray = "#fafafa";
    
    /****************** Home and Contents(SVG)Icons for the Heading ****************************/
  var homeIcon_grey = '<span id="home_greyIcon"><svg id="home_grey" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.08 170.08"><defs><style>.cls-1{fill:rgb(189, 189, 189);}</style></defs><title>buildings</title><polygon class="cls-1" points="17.34 74.2 24.72 79.37 84.54 37.51 144.29 79.49 151.86 74.17 84.54 27.26 54.1 48.59 54.1 37.19 39.25 37.19 39.25 58.96 17.34 74.2"/><path class="cls-1" d="M84.54,42.81,33.68,78.34V145H135.4V78.38Zm23.74,79.85H97.76V112.14h10.53Zm0-13.68H97.76V98.46h10.53Zm13.64,13.68H111.4V112.14h10.53Zm0-13.68H111.4V98.46h10.53Z"/></svg></span>'; 
    
  var contentsIcon_grey = '<span id="contents_greyIcon"><svg id="contents_grey" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.08 170.08"><defs><style>.cls-1{fill:rgb(189, 189, 189);}</style></defs><title>contents</title><path class="cls-1" d="M64.49,93.56a135.91,135.91,0,0,0-22.72,2s-2.49-8.38-7.31-10.43-7-1.34-7-1.34.62-16.31,14.08-16.31H87.77c13.46,0,14.08,16.31,14.08,16.31s-2.14-.71-7,1.34-7.31,10.43-7.31,10.43a135.91,135.91,0,0,0-22.72-2Zm29.16,27.71c8.29,0,8.2-7.93,8.2-7.93s.53-11.49,1.6-10.34a6,6,0,0,0,5-5.35s1.78-7.93-6.59-9.62-12,13.54-12,13.54A67.92,67.92,0,0,0,79.57,98.9a61.6,61.6,0,0,0-14.7-1.16h-.38a61.6,61.6,0,0,0-14.7,1.16,67.92,67.92,0,0,0-10.25,2.67S35.89,86.34,27.52,88s-6.59,9.62-6.59,9.62a6,6,0,0,0,5,5.35c1.07-1.16,1.6,10.34,1.6,10.34s-.09,7.93,8.2,7.93Zm4,7.39v-2.93A2.69,2.69,0,0,0,95,123.05H88.67A2.69,2.69,0,0,0,86,125.73v2.93a2.69,2.69,0,0,0,2.68,2.68H95A2.69,2.69,0,0,0,97.66,128.66Zm-63.28,2.68H40.7a2.69,2.69,0,0,0,2.68-2.68v-2.93a2.69,2.69,0,0,0-2.68-2.68H34.38a2.69,2.69,0,0,0-2.68,2.68v2.93A2.69,2.69,0,0,0,34.38,131.34Z"/><path class="cls-1" d="M109.4,94.59h35.27A3.63,3.63,0,0,0,148.29,91V59.67a3.63,3.63,0,0,0-3.62-3.62H84.11a3.63,3.63,0,0,0-3.62,3.62V66.6l-4.2,0V56.44a3.63,3.63,0,0,1,3.62-3.62h68.95a3.63,3.63,0,0,1,3.62,3.62V96.36a3.63,3.63,0,0,1-3.62,3.62H108.6A9.31,9.31,0,0,0,109.4,94.59Zm5,1.06A1.55,1.55,0,1,0,116,97.21,1.55,1.55,0,0,0,114.42,95.65Z"/><path class="cls-1" d="M102.82,110a58.15,58.15,0,0,0,12,1.42h.55c8.46,0,19.55-2.79,21.54-5.17s-1.29-4.18-1.29-4.18H107.11a8,8,0,0,1-3,1.73C102.78,104,102.82,110,102.82,110Z"/></svg></span>'; 

  var homeIcon_blue = '<span id="home_blueIcon"><svg id="home_blue" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.08 170.08"><defs><style>.cls-2{fill:#006bab;}</style></defs><title>buildings</title><polygon class="cls-2" points="17.34 74.2 24.72 79.37 84.54 37.51 144.29 79.49 151.86 74.17 84.54 27.26 54.1 48.59 54.1 37.19 39.25 37.19 39.25 58.96 17.34 74.2"/><path class="cls-2" d="M84.54,42.81,33.68,78.34V145H135.4V78.38Zm23.74,79.85H97.76V112.14h10.53Zm0-13.68H97.76V98.46h10.53Zm13.64,13.68H111.4V112.14h10.53Zm0-13.68H111.4V98.46h10.53Z"/></svg></span>';

  var contentsIcon_blue = '<span id="contents_blueIcon"><svg id="contents_blue" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.08 170.08"><defs><style>.cls-2{fill:#006bab;}</style></defs><title>contents</title><path class="cls-2" d="M64.49,93.56a135.91,135.91,0,0,0-22.72,2s-2.49-8.38-7.31-10.43-7-1.34-7-1.34.62-16.31,14.08-16.31H87.77c13.46,0,14.08,16.31,14.08,16.31s-2.14-.71-7,1.34-7.31,10.43-7.31,10.43a135.91,135.91,0,0,0-22.72-2Zm29.16,27.71c8.29,0,8.2-7.93,8.2-7.93s.53-11.49,1.6-10.34a6,6,0,0,0,5-5.35s1.78-7.93-6.59-9.62-12,13.54-12,13.54A67.92,67.92,0,0,0,79.57,98.9a61.6,61.6,0,0,0-14.7-1.16h-.38a61.6,61.6,0,0,0-14.7,1.16,67.92,67.92,0,0,0-10.25,2.67S35.89,86.34,27.52,88s-6.59,9.62-6.59,9.62a6,6,0,0,0,5,5.35c1.07-1.16,1.6,10.34,1.6,10.34s-.09,7.93,8.2,7.93Zm4,7.39v-2.93A2.69,2.69,0,0,0,95,123.05H88.67A2.69,2.69,0,0,0,86,125.73v2.93a2.69,2.69,0,0,0,2.68,2.68H95A2.69,2.69,0,0,0,97.66,128.66Zm-63.28,2.68H40.7a2.69,2.69,0,0,0,2.68-2.68v-2.93a2.69,2.69,0,0,0-2.68-2.68H34.38a2.69,2.69,0,0,0-2.68,2.68v2.93A2.69,2.69,0,0,0,34.38,131.34Z"/><path class="cls-2" d="M109.4,94.59h35.27A3.63,3.63,0,0,0,148.29,91V59.67a3.63,3.63,0,0,0-3.62-3.62H84.11a3.63,3.63,0,0,0-3.62,3.62V66.6l-4.2,0V56.44a3.63,3.63,0,0,1,3.62-3.62h68.95a3.63,3.63,0,0,1,3.62,3.62V96.36a3.63,3.63,0,0,1-3.62,3.62H108.6A9.31,9.31,0,0,0,109.4,94.59Zm5,1.06A1.55,1.55,0,1,0,116,97.21,1.55,1.55,0,0,0,114.42,95.65Z"/><path class="cls-2" d="M102.82,110a58.15,58.15,0,0,0,12,1.42h.55c8.46,0,19.55-2.79,21.54-5.17s-1.29-4.18-1.29-4.18H107.11a8,8,0,0,1-3,1.73C102.78,104,102.82,110,102.82,110Z"/></svg></span>'; 


  var yourCoverPage = {

    init: function(){
      var $_ = this;
      $_.globaljs();
      $_.globalStyle(true);
      $_.page_form();
    },
    globaljs: function(){
        $('select').wrap($("<div class='select-style'></div>"));
        $(".form-background:lt(2) :not(:first-child)").hide();
        $('#postalAddressPanel #tooltip_riskPostalAddress').hide();
        $(".form-background .section-titles h1").css({'color':'rgb(189, 189, 189)','padding-top':'8px'});
        $(".form-background:eq(0)").css('border-bottom','1px solid #F8F8F8');
        $(".form-background .section-titles:eq(0)").prepend(homeIcon_grey);
        $(".form-background .section-titles:eq(1)").prepend(contentsIcon_grey);
        if($("#specifiedItemsPanel").children().length > 0){
          $("#specifiedItemsPanel .form-background").hide();
        } 
    },
      
    globalStyle: function(applyCss){
      if(applyCss){
        var mainCss = ''+
        /************************-- 
        Select Option -- 
        ***************************/
        '.select-style {width: 57%; position:relative; margin-top: 10px;border: 1px solid '+gray+';  border-radius: 3px; overflow: hidden; background: '+ light_gray +' url("http://i62.tinypic.com/15xvbd5.png") no-repeat 97% 50%; }'+
       /* '.form-background select  { padding: 5px 8px;  border: none; box-shadow: none; background: transparent; background-image: none; -webkit-appearance: none; }'+*/
        '.form-background select :focus {outline: none; }'+
        '#container dt { width: 36%; }'+'#container dd { width: 62%; }'+
        /************************-- 
        Buttons input + label-- 
        ***************************/
        '.seg-inputs[type="radio"] {width: 0px; height: 0px; display: none!important; }'+  
        '.selected{background-color:'+ blue +'!important;}'+
        '.sh_test{text-decoration:underline; color: #494949; position:absolute; right:0px; top:6px;}'+
        '#label_billingAddrSameAsPolicyAddr_0,#label_billingAddrSameAsPolicyAddr_1{ width: 35%;}'+
        /* end global button */
        '#home_icon,#contents_icon{float:left;}';

        var headofdoc = document.getElementsByTagName('head')[0];
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(mainCss));
        headofdoc.appendChild(s);
      }
    },
    
    page_form: function(){
      /************************-- 
      Buttons with icons -- 
      ***************************/

      /******************* Your Cover Section*****************/
      var yourCover = ''+
      '<div class="top_header">'+
        '<div class="section-titles">'+
          '<h1>Your Cover</h1>'+
        '</div>'+
        '<div id="tooltip_toc" class="floar_r toolhover">' +
          //'<div class="floar_r">' +
          //'<span id="r_par"><p class="t_paragraph">What type of cover do you need?</p></span>'+
           '<dl id="typeOfCoverMessageAnchor">'+
                '<dt class="radio-dt-spacer">What type of cover do you need?</dt>'+
                '<dd id="specified-radio" style="padding-bottom:0px;">'+
                    '<div class="seg-label-large" id="buildings">'+
                        '<span class="cover_title">Buildings</span>'+
                        /* SVG image for home icon */
                        '<span id="yourCoverHome"><svg id="yourCover_home" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.08 170.08"><defs><style>.cls-2{fill:#006bab;}</style></defs><title>buildings</title><polygon class="cls-2" points="17.34 74.2 24.72 79.37 84.54 37.51 144.29 79.49 151.86 74.17 84.54 27.26 54.1 48.59 54.1 37.19 39.25 37.19 39.25 58.96 17.34 74.2"/><path class="cls-2" d="M84.54,42.81,33.68,78.34V145H135.4V78.38Zm23.74,79.85H97.76V112.14h10.53Zm0-13.68H97.76V98.46h10.53Zm13.64,13.68H111.4V112.14h10.53Zm0-13.68H111.4V98.46h10.53Z"/></svg></span>'+
                    '</div>'+
                    '<div class="seg-label-large" id="contents">'+
                        '<span class="cover_title">Contents</span>'+
                         /* SVG image for contents icon */
                        '<span id="yourCoverContents"><svg id="yourCover_contents" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.08 170.08"><defs><style>.cls-2{fill:#006bab;}</style></defs><title>contents</title><path class="cls-2" d="M64.49,93.56a135.91,135.91,0,0,0-22.72,2s-2.49-8.38-7.31-10.43-7-1.34-7-1.34.62-16.31,14.08-16.31H87.77c13.46,0,14.08,16.31,14.08,16.31s-2.14-.71-7,1.34-7.31,10.43-7.31,10.43a135.91,135.91,0,0,0-22.72-2Zm29.16,27.71c8.29,0,8.2-7.93,8.2-7.93s.53-11.49,1.6-10.34a6,6,0,0,0,5-5.35s1.78-7.93-6.59-9.62-12,13.54-12,13.54A67.92,67.92,0,0,0,79.57,98.9a61.6,61.6,0,0,0-14.7-1.16h-.38a61.6,61.6,0,0,0-14.7,1.16,67.92,67.92,0,0,0-10.25,2.67S35.89,86.34,27.52,88s-6.59,9.62-6.59,9.62a6,6,0,0,0,5,5.35c1.07-1.16,1.6,10.34,1.6,10.34s-.09,7.93,8.2,7.93Zm4,7.39v-2.93A2.69,2.69,0,0,0,95,123.05H88.67A2.69,2.69,0,0,0,86,125.73v2.93a2.69,2.69,0,0,0,2.68,2.68H95A2.69,2.69,0,0,0,97.66,128.66Zm-63.28,2.68H40.7a2.69,2.69,0,0,0,2.68-2.68v-2.93a2.69,2.69,0,0,0-2.68-2.68H34.38a2.69,2.69,0,0,0-2.68,2.68v2.93A2.69,2.69,0,0,0,34.38,131.34Z"/><path class="cls-2" d="M109.4,94.59h35.27A3.63,3.63,0,0,0,148.29,91V59.67a3.63,3.63,0,0,0-3.62-3.62H84.11a3.63,3.63,0,0,0-3.62,3.62V66.6l-4.2,0V56.44a3.63,3.63,0,0,1,3.62-3.62h68.95a3.63,3.63,0,0,1,3.62,3.62V96.36a3.63,3.63,0,0,1-3.62,3.62H108.6A9.31,9.31,0,0,0,109.4,94.59Zm5,1.06A1.55,1.55,0,1,0,116,97.21,1.55,1.55,0,0,0,114.42,95.65Z"/><path class="cls-2" d="M102.82,110a58.15,58.15,0,0,0,12,1.42h.55c8.46,0,19.55-2.79,21.54-5.17s-1.29-4.18-1.29-4.18H107.11a8,8,0,0,1-3,1.73C102.78,104,102.82,110,102.82,110Z"/></svg></span>'+
                    '</div>'+
                    '<div class="seg-label-large" id="buildings_contents">'+
                        '<span class="cover_title">Building + Contents</span>'+
                        /* SVG image for home+contents icons */
                         '<span id="yourCoverHomeContents"><svg id="yourCover_home&contents" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.08 170.08"><defs><style>.cls-2{fill:#006bab;}</style></defs><title>buildings</title><polygon class="cls-2" points="17.34 74.2 24.72 79.37 84.54 37.51 144.29 79.49 151.86 74.17 84.54 27.26 54.1 48.59 54.1 37.19 39.25 37.19 39.25 58.96 17.34 74.2"/><path class="cls-2" d="M84.54,42.81,33.68,78.34V145H135.4V78.38Zm23.74,79.85H97.76V112.14h10.53Zm0-13.68H97.76V98.46h10.53Zm13.64,13.68H111.4V112.14h10.53Zm0-13.68H111.4V98.46h10.53Z"/></svg></span>&nbsp;'+
                        '<span id="plusSym">+</span>'+
                        '&nbsp;<span id="yourCoverContentsHome"><svg id="yourCover_home&contents" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.08 170.08"><defs><style>.cls-2{fill:#006bab;}</style></defs><title>contents</title><path class="cls-2" d="M64.49,93.56a135.91,135.91,0,0,0-22.72,2s-2.49-8.38-7.31-10.43-7-1.34-7-1.34.62-16.31,14.08-16.31H87.77c13.46,0,14.08,16.31,14.08,16.31s-2.14-.71-7,1.34-7.31,10.43-7.31,10.43a135.91,135.91,0,0,0-22.72-2Zm29.16,27.71c8.29,0,8.2-7.93,8.2-7.93s.53-11.49,1.6-10.34a6,6,0,0,0,5-5.35s1.78-7.93-6.59-9.62-12,13.54-12,13.54A67.92,67.92,0,0,0,79.57,98.9a61.6,61.6,0,0,0-14.7-1.16h-.38a61.6,61.6,0,0,0-14.7,1.16,67.92,67.92,0,0,0-10.25,2.67S35.89,86.34,27.52,88s-6.59,9.62-6.59,9.62a6,6,0,0,0,5,5.35c1.07-1.16,1.6,10.34,1.6,10.34s-.09,7.93,8.2,7.93Zm4,7.39v-2.93A2.69,2.69,0,0,0,95,123.05H88.67A2.69,2.69,0,0,0,86,125.73v2.93a2.69,2.69,0,0,0,2.68,2.68H95A2.69,2.69,0,0,0,97.66,128.66Zm-63.28,2.68H40.7a2.69,2.69,0,0,0,2.68-2.68v-2.93a2.69,2.69,0,0,0-2.68-2.68H34.38a2.69,2.69,0,0,0-2.68,2.68v2.93A2.69,2.69,0,0,0,34.38,131.34Z"/><path class="cls-2" d="M109.4,94.59h35.27A3.63,3.63,0,0,0,148.29,91V59.67a3.63,3.63,0,0,0-3.62-3.62H84.11a3.63,3.63,0,0,0-3.62,3.62V66.6l-4.2,0V56.44a3.63,3.63,0,0,1,3.62-3.62h68.95a3.63,3.63,0,0,1,3.62,3.62V96.36a3.63,3.63,0,0,1-3.62,3.62H108.6A9.31,9.31,0,0,0,109.4,94.59Zm5,1.06A1.55,1.55,0,1,0,116,97.21,1.55,1.55,0,0,0,114.42,95.65Z"/><path class="cls-2" d="M102.82,110a58.15,58.15,0,0,0,12,1.42h.55c8.46,0,19.55-2.79,21.54-5.17s-1.29-4.18-1.29-4.18H107.11a8,8,0,0,1-3,1.73C102.78,104,102.82,110,102.82,110Z"/></svg></span>'+
                    '</div>'+
                '</dd>'+
            '</dl>'+
        '</div>'+
      '</div>';
    
      // Triger all selection

        $(yourCover).prependTo(".content-area-centre");
        
       /******************* Buildings Cover Section*****************/
      
        var buildingsAccidentalDamage =
        '<div id="badc" class="toolhover">'+
            '<dl id="buildingsAccidentDamageCoverMessageAnchor">'+
                '<dt class="radio-dt-spacer">Would you like to add accidental damage cover to your policy?</dt>'+
                '<dd id="specified-radio">'+
                    '<fieldset>'+
                        '<legend>Would like to add accidental damage cover to your policy</legend>'+
                        '<label for="buildingsCovers_adc" id="label_buildingsCovers_adc" class="bc_seg_label">'+
                            '<span id="radio_buildingsCovers_adc">'+
                                '<input type="radio" name="buildingsCoversType" id="buildingsCovers_adc" value="ADC">'+ 
                            '</span>'+
                            '<span id="description_buildingsCovers_adc">Yes</span>'+
                        '</label>'+
                        '<label for="buildingsCovers_sc" id="label_buildingsCovers_sc" class="bc_seg_label active_sellection">'+
                            '<span id="radio_buildingsCovers_sc">'+
                                '<input type="radio" name="buildingsCoversType" id="buildingsCovers_sc" value="SC" checked="checked">'+ 
                            '</span>'+
                            '<span id="description_buildingsCovers_sc">No</span>'+
                        '</label>'+
                    '</fieldset>'+
                '</dd>'+
            '</dl>'+
      '</div>'; 
        
        var tooptip = '<dd class="container-vec">'+
        '<ul class="excess_panel">'+
          '<li class="tooltip-top" data-tooltip_t="£0" id="tooltip1">&pound;0</li>'+
          '<li class="tooltip-top" data-tooltip_t="£100" id="tooltip2">&pound;100</li>'+
          '<li class="tooltip-top" data-tooltip_t="£250" id="tooltip3">&pound;250</li>'+
          '<li class="active_sellection tooltip-top" data-tooltip_t="£400" id="tooltip4">&pound;400</li>'+
          '<li class="tooltip-top" data-tooltip_t="£500" id="tooltip5">&pound;500</li>'+
        '</ul>'+
        '</dd>';
        
        var adc_info = '<div id="adc_info">'+
            //'<img id="" src="/images/help_icon_2.png" title="info" alt="info">'+
            '<p id="" style="display:inline-block;">'+
                '<img id="" src="/images/help_icon_2.png" title="info" alt="info">'+
                '<span id="bvce_text"> Accidental damage cover provides cover for unexpected and unintended events, such as breakages and spillages</span>'+
            '</p>'+
        '</div>';
        
         $('[data-tooltip_t').change().removeClass('active_sellection');
        
         function tooltip(){
         
            $("#tooltip1").click(function(){  
                $('[data-tooltip_t').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                $("#buildingVoluntaryExcess option[value='0']").attr('selected','selected');
                document.cookie = "tooltip1 = true;path=/;expires=0";
                document.cookie = "tooltip2=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "tooltip3=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "tooltip4=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "tooltip5=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            });
            $("#tooltip2").click(function(){
                $('[data-tooltip_t').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                $("#buildingVoluntaryExcess option[value='100']").attr('selected','selected');
                document.cookie = "tooltip2 = true;path=/;expires=0";
                document.cookie = "tooltip1=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "tooltip3=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "tooltip4=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "tooltip5=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            });
            $("#tooltip3").click(function(){
                $('[data-tooltip_t').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                $("#buildingVoluntaryExcess option[value='250']").attr('selected','selected');
                document.cookie = "tooltip3 = true;path=/;expires=0";
                document.cookie = "tooltip1=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "tooltip2=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "tooltip4=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "tooltip5=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
          });
          $("#tooltip4").click(function(){
                $('[data-tooltip_t').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                $("#buildingVoluntaryExcess option[value='400']").attr('selected','selected');
                document.cookie = "tooltip4 = true;path=/;expires=0";
                document.cookie = "tooltip1=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "tooltip2=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "tooltip3=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "tooltip5=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
          });
          $("#tooltip5").click(function(){
                $('[data-tooltip_t').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                $("#buildingVoluntaryExcess option[value='500']").attr('selected','selected');
                document.cookie = "tooltip5 = true;path=/;expires=0";
                document.cookie = "tooltip1=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "tooltip2=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "tooltip3=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "tooltip4=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
          });        
        }
        
        // Listen Cookey exist
   
        function tooltip_cookey(){
            /*if($("dd.container-vec ul li").hasClass('active_sellection')){
               $("dd.container-vec ul li.active_sellection").removeClass('active_sellection');  
            }*/
            var activeLi = $("dd.container-vec ul li").hasClass('active_sellection');
            if (document.cookie.indexOf("tooltip1") >= 0 && activeLi) {
              $("dd.container-vec ul li.active_sellection").removeClass('active_sellection'); 
              $('#tooltip1').addClass('active_sellection');
            }
            if (document.cookie.indexOf("tooltip2") >= 0 && activeLi) {
              $("dd.container-vec ul li.active_sellection").removeClass('active_sellection'); 
              $('#tooltip2').addClass('active_sellection');
            }
            if (document.cookie.indexOf("tooltip3") >= 0 && activeLi) {
               $("dd.container-vec ul li.active_sellection").removeClass('active_sellection'); 
              $('#tooltip3').addClass('active_sellection');
            }
            if (document.cookie.indexOf("tooltip4") >= 0 && activeLi) {
               $("dd.container-vec ul li.active_sellection").removeClass('active_sellection'); 
              $('#tooltip4').addClass('active_sellection');
            }
            if (document.cookie.indexOf("tooltip5") >= 0 && activeLi) {
               $("dd.container-vec ul li.active_sellection").removeClass('active_sellection'); 
              $('#tooltip5').addClass('active_sellection');
            }
        }
        
        function buildings(){
            $('#qtip-0').hide(); // hides small blue box at the top-left corner
            $('#postalAddressPanel #tooltip_riskPostalAddress').hide();
            //$("#qtip-0 .qtip-esure").hide();         
            $("div#tooltip_bsi").hide();
            $("#buildingsCoversExtras #tooltip_bve").find("dd").hide();
            $(tooptip).insertAfter($("#buildingsCoversExtras #tooltip_bve").find("dd")[0]);
            $(buildingsAccidentalDamage).insertAfter('#tooltip_bve');
            tooltip();
            tooltip_cookey();
            $(adc_info).appendTo("#badc");
        }
        function buildingsCoverSelection(){
             $("#label_buildingsCovers_sc").click(function(){ 
                $('.bc_seg_label.active_sellection').removeClass('active_sellection');
                $(this).addClass('active_sellection'); 
                $('#badc #buildingsCovers_sc').attr('checked',true);
                $("#buildings-extra #buildingsCovers_1").attr('checked',true);
                document.cookie = "buildingsCovers_sc = true;path=/;expires=0";
                document.cookie = "buildingsCovers_1 = true;path=/;expires=0"; 
                document.cookie = "buildingsCovers_adc=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "buildingsCovers_2=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                $("#tooltip_bc #label_buildingsCovers_1").removeClass().addClass('selected');
            });
            $("#label_buildingsCovers_adc").click(function(){
                $('.bc_seg_label.active_sellection').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                $('#badc #buildingsCovers_adc').attr('checked',true);
                $("#buildings-extra #buildingsCovers_2").attr('checked',true);
                document.cookie = "buildingsCovers_adc = true;path=/;expires=0";
                document.cookie = "buildingsCovers_2 = true;path=/;expires=0"; 
                document.cookie = "buildingsCovers_sc=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "buildingsCovers_1=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            });
        }
        
        function coverSelectionCookie(){
            if (document.cookie.indexOf("buildingsCovers_adc") >= 0) {
                $('.bc_seg_label.active_sellection').removeClass('active_sellection');
                $('#label_buildingsCovers_adc').addClass('active_sellection'); 
                $('#badc #buildingsCovers_adc').attr('checked',true);
                $("#buildings-extra #buildingsCovers_2").attr('checked',true); 
            }
            if (document.cookie.indexOf("buildingsCovers_sc") >= 0) {
                $('.bc_seg_label.active_sellection').removeClass('active_sellection');
                $('#label_buildingsCovers_sc').addClass('active_sellection'); 
                $('#badc #buildingsCovers_sc').attr('checked',true);
                $("#buildings-extra #buildingsCovers_1").attr('checked',true); 
            }
            if (document.cookie.indexOf("contentsCovers_adc") >= 0) { 
                $('.cc_seg_label.active_sellection').removeClass('active_sellection');
                $('#label_contentsCovers_adc').addClass('active_sellection'); 
                $('#cadc #contentsCovers_adc').attr('checked',true);
                $("#contents-extra #contentsCovers_2").attr('checked',true); 
            }
            if (document.cookie.indexOf("contentsCovers_sc") >= 0) {
                $('.cc_seg_label.active_sellection').removeClass('active_sellection');
                $('#label_contentsCovers_sc').addClass('active_sellection'); 
                $('#cadc #contentsCovers_sc').attr('checked',true);
                $("#contents-extra #contentsCovers_1").attr('checked',true); 
            } 
        }
        
        //buildings cover
        $('#buildings').click(function(e){
            $('div.seg-label-large.cover_selected').removeClass('cover_selected');
            $('span.cover_title.selected_title').removeClass('selected_title');
            $(this).addClass('cover_selected');
            $(this).find('.cover_title').addClass('selected_title');
            $('#radio_buildingsCovers_2').click();
            //console.log($("input[name='buildingsCovers']:checked").val());
            $(".form-background:eq(0) .section-titles h1").css('color','#0971b0');
            $(".form-background:eq(1) .section-titles h1").css('color','rgb(189, 189, 189)');
            $("#home_greyIcon").replaceWith(homeIcon_blue);
            $("#contents_blueIcon").replaceWith(contentsIcon_grey);
            $(".form-background:eq(1)").children().filter(":not(.section-titles)").hide(); 
             setTimeout(function(){ 
                if($("#specifiedItemsPanel").children().length > 0){
                    $("#specifiedItemsPanel").hide();
                }
                buildings();
                coverSelectionCookie();
                buildingsCoverSelection();
                //console.log($("input[name='buildingsCovers']:checked").val());
                /******************* Tracking Building Accident Cover custom event ***********************/
                $('#label_buildingsCovers_adc').click(function(){
                    window['optimizely'] = window['optimizely'] || [];
                    if ($("#label_buildingsCovers_adc").hasClass('active_sellection')) {
                        window.optimizely.push(["trackEvent", "buildingADC"]);	
                    }
                });
             }, 600);
            e.preventDefault();
        });
        
        /******************* Contents Cover Section*****************/ 
        
        var contentsAccidentalDamage =
        '<div id="cadc" class="toolhover">'+
            '<dl id="contentsAccidentDamageCoverMessageAnchor">'+
                '<dt class="radio-dt-spacer">Would you like to add contents accidental damage cover to your policy?</dt>'+
                '<dd id="specified-radio">'+
                    '<fieldset>'+
                        '<legend>Would like to add contents accidental damage cover to your policy</legend>'+
                        '<label for="contentsCovers_adc" id="label_contentsCovers_adc" class="cc_seg_label">'+
                            '<span id="radio_contentsCovers_adc">'+
                                '<input type="radio" name="contentsCoversType" id="contentsCovers_adc" value="CADC">'+ 
                            '</span>'+
                            '<span id="description_contentsCovers_adc">Yes</span>'+
                        '</label>'+
                        '<label for="contentsCovers_sc" id="label_contentsCovers_sc" class="cc_seg_label active_sellection">'+
                            '<span id="radio_contentsCovers_sc">'+
                                '<input type="radio" name="contentsCoversType" id="contentsCovers_sc" value="CSC" checked="checked">'+ 
                            '</span>'+
                            '<span id="description_contentsCovers_sc">No</span>'+
                        '</label>'+
                    '</fieldset>'+
                '</dd>'+
            '</dl>'+
      '</div>'; 
        
      var ncd_tooltips = '<dd id="container-ncd">'+
        '<ul class="contentexcess_panel">'+
          '<li class="tooltip-top" data-tooltip_n="0" id="ncd_tooltips1">0</li>'+
          '<li class="tooltip-top" data-tooltip_n="1" id="ncd_tooltips2">1</li>'+
          '<li class="tooltip-top" data-tooltip_n="2" id="ncd_tooltips3">2</li>'+
          '<li class="tooltip-top" data-tooltip_n="3" id="ncd_tooltips4">3</li>'+
          '<li class="tooltip-top" data-tooltip_n="4" id="ncd_tooltips5">4</li>'+
          '<li class="active_sellection tooltip-top" data-tooltip_n="5" id="ncd_tooltips6">5+</li>'+
        '</ul>'+
        '</dd>';
        var cvec_tooltips = '<dd id="container-cvec">'+
        '<ul class="excess_panel">'+
          '<li class="tooltip-top" data-tooltip_c="£0" id="cvec_tooltips1">&pound;0</li>'+
          '<li class="tooltip-top" data-tooltip_c="£50" id="cvec_tooltips2">&pound;50</li>'+
          '<li class="tooltip-top" data-tooltip_c="£100" id="cvec_tooltips3">&pound;100</li>'+
          '<li class="tooltip-top" data-tooltip_c="£200" id="cvec_tooltips4">&pound;200</li>'+
          '<li class="active_sellection tooltip-top" data-tooltip_c="£400" id="cvec_tooltips5">&pound;400</li>'+
        '</ul>'+
        '</dd>';
        
        $('[data-tooltip_n').change().removeClass('active_sellection');
        
        function ncd_selection(){
            $('#container-ncd data-tooltip_n').change().removeClass('active_sellection');
            $("#ncd_tooltips1").click(function(){  
                $("#ncd option[value='0']").attr('selected','selected');
                $('[data-tooltip_n').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                document.cookie = "ncd_tooltips1 = true;path=/;expires=0";
                document.cookie = "ncd_tooltips2=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips3=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips4=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips5=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips6=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
          });
          $("#ncd_tooltips2").click(function(){
                $('[data-tooltip_n').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                $("#ncd option[value='1']").attr('selected','selected');
                document.cookie = "ncd_tooltips2 = true;path=/;expires=0";
                document.cookie = "ncd_tooltips1=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips3=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips4=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips5=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips6=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
          });
          $("#ncd_tooltips3").click(function(){
                $('[data-tooltip_n').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                $("#ncd option[value='2']").attr('selected','selected');
                document.cookie = "ncd_tooltips3 = true;path=/;expires=0";
                document.cookie = "ncd_tooltips1=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips2=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips4=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips5=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips6=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
          });
          $("#ncd_tooltips4").click(function(){
                $('[data-tooltip_n').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                $("#ncd option[value='3']").attr('selected','selected');
                document.cookie = "ncd_tooltips4 = true;path=/;expires=0";
                document.cookie = "ncd_tooltips1=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips2=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips3=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips5=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips6=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
          });
          $("#ncd_tooltips5").click(function(){
                $('[data-tooltip_n').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                $("#ncd option[value='4']").attr('selected','selected');
                document.cookie = "ncd_tooltips5 = true;path=/;expires=0";
                document.cookie = "ncd_tooltips1=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips2=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips3=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips4=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips6=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
          });      
          $("#ncd_tooltips6").click(function(){
                $("#ncd option[value='5']").attr('selected','selected');
                $('[data-tooltip_n').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                document.cookie = "ncd_tooltips6 = true;path=/;expires=0";
                document.cookie = "ncd_tooltips1=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips2=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips3=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips4=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "ncd_tooltips5=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
          });  
        }
          function ncd_tooltipscookey(){
            /*if($("dd#container-ncd ul li").hasClass('active_sellection')){
                $("dd#container-ncd ul li.active_sellection").removeClass('active_sellection');
            }*/
            var activeLi = $("dd#container-ncd ul li").hasClass('active_sellection');
            if (document.cookie.indexOf("ncd_tooltips1") >= 0 && activeLi) {
              $("dd#container-ncd ul li.active_sellection").removeClass('active_sellection');
              $('#ncd_tooltips1').addClass('active_sellection');
            }
            if (document.cookie.indexOf("ncd_tooltips2") >= 0 && activeLi) {
              $("dd#container-ncd ul li.active_sellection").removeClass('active_sellection');
              $('#ncd_tooltips2').addClass('active_sellection');
            }
            if (document.cookie.indexOf("ncd_tooltips3") >= 0 && activeLi) {
              $("dd#container-ncd ul li.active_sellection").removeClass('active_sellection');
              $('#ncd_tooltips3').addClass('active_sellection');
            }
            if (document.cookie.indexOf("ncd_tooltips4") >= 0 && activeLi) {
              $("dd#container-ncd ul li.active_sellection").removeClass('active_sellection');
              $('#ncd_tooltips4').addClass('active_sellection');
            }
            if (document.cookie.indexOf("ncd_tooltips5") >= 0 && activeLi) {
              $("dd#container-ncd ul li.active_sellection").removeClass('active_sellection');
              $('#ncd_tooltips5').addClass('active_sellection');   
            }
            if (document.cookie.indexOf("ncd_tooltips6") >= 0 && activeLi) {
              $("dd#container-ncd ul li.active_sellection").removeClass('active_sellection');
              $('#ncd_tooltips6').addClass('active_sellection');   
            }
        }
       
        $('[data-tooltip_c').change().removeClass('active_sellection');
        
        function cvec_selection(){
            $("#cvec_tooltips1").click(function(){  
                $('[data-tooltip_c').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                $("#contentVolExcess option[value='0']").attr('selected','selected');
                document.cookie = "cvec_tooltips1 = true;path=/;expires=0";
                document.cookie = "cvec_tooltips2=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "cvec_tooltips3=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "cvec_tooltips4=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "cvec_tooltips5=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
          });
          $("#cvec_tooltips2").click(function(){
                $('[data-tooltip_c').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                $("#contentVolExcess option[value='50']").attr('selected','selected');
                document.cookie = "cvec_tooltips2 = true;path=/;expires=0";
                document.cookie = "cvec_tooltips1=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "cvec_tooltips3=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "cvec_tooltips4=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "cvec_tooltips5=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";  
          });
          $("#cvec_tooltips3").click(function(){
                $('[data-tooltip_c').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                $("#contentVolExcess option[value='100']").attr('selected','selected');
                document.cookie = "cvec_tooltips3 = true;path=/;expires=0";
                document.cookie = "cvec_tooltips1=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "cvec_tooltips2=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "cvec_tooltips4=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "cvec_tooltips5=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
          });
          $("#cvec_tooltips4").click(function(){
                $('[data-tooltip_c').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                $("#contentVolExcess option[value='200']").attr('selected','selected');
                document.cookie = "cvec_tooltips4 = true;path=/;expires=0";
                document.cookie = "cvec_tooltips1=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "cvec_tooltips2=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "cvec_tooltips3=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "cvec_tooltips5=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
          });
          $("#cvec_tooltips5").click(function(){
                $('[data-tooltip_c').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                $("#contentVolExcess option[value='400']").attr('selected','selected');
                document.cookie = "cvec_tooltips5 = true;path=/;expires=0";
                document.cookie = "cvec_tooltips1=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "cvec_tooltips2=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "cvec_tooltips3=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "cvec_tooltips4=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
          }); 
        }
        
           function cvec_tooltipscookey(){
            /*if($("dd#container-cvec ul li").hasClass('active_sellection')){
                $("dd#container-cvec ul li.active_sellection").removeClass('active_sellection');
            }*/   
            var activeLi = $("dd#container-cvec ul li").hasClass('active_sellection');   
            if (document.cookie.indexOf("cvec_tooltips1") >= 0 && activeLi) {
              $("dd#container-cvec ul li.active_sellection").removeClass('active_sellection');
              $('#cvec_tooltips1').addClass('active_sellection');
            }
            if (document.cookie.indexOf("cvec_tooltips2") >= 0 && activeLi) {
              $("dd#container-cvec ul li.active_sellection").removeClass('active_sellection');
              $('#cvec_tooltips2').addClass('active_sellection');
            }
            if (document.cookie.indexOf("cvec_tooltips3") >= 0 && activeLi) {
              $("dd#container-cvec ul li.active_sellection").removeClass('active_sellection');
              $('#cvec_tooltips3').addClass('active_sellection');
            }
            if (document.cookie.indexOf("cvec_tooltips4") >= 0 && activeLi) {
              $("dd#container-cvec ul li.active_sellection").removeClass('active_sellection');
              $('#cvec_tooltips4').addClass('active_sellection');
            }
            if (document.cookie.indexOf("cvec_tooltips5") >= 0 && activeLi) {
               $("dd#container-cvec ul li.active_sellection").removeClass('active_sellection');
              $('#cvec_tooltips5').addClass('active_sellection');     
            }
        }
        
        var poundSym = '<span id="pouSym">£</span>';
        //var dataLayer = esureDataLayer;
        var x = 0;
        var approContentCover = function(x){
            var numOfBedrooms = $("#nob").text();
            switch(numOfBedrooms){
                case '1': return '£30,000';
                case '2': return '£40,000';
                case '3': return '£50,000';
                case '4': return '£60,000';    
                case '5': return '£70,000';
                case '6+': return '£80,000';
            } 
        };
        var crc = '<span id="nob" style="display:none;">'+esureDataLayer.numberOfBedrooms +'</span>'+
            '<div id="conReplacement">On average, for a property with &nbsp;'+esureDataLayer.numberOfBedrooms+'&nbsp; bedrooms, our customers tend to require approximately' + 
            '&nbsp;<span id="acrc"></span>&nbsp;'+'worth of contents cover. However, please be sure to double check this by using our '+
             ' <a href="/groups/wcm/@wcm/documents/webcontent/esure_home_contents_calc.pdf" target="_blank" style="position: relative;width: auto;right: 0; ">Home Contents Checklist.</a>'+
        '</div>';
        var pp_info = '<div id="pp_info">'+
            '<p id="" style="display:inline-block;">'+
                '<img id="" src="/images/help_icon_2.png" title="info" alt="info">'+
                '<div id="pp_text">Personal Possessions cover provides protection for any items you take with you out of your home. So, if your mobile phone gets lost or stolen or your laptop is damaged in an accident, this cover is designed to help.'+ '<a href="/pages/product/home/latest/policyBooklet" target="_blank" style="position: relative;width: auto;right: 0;"> Click here </a> for full details about items covered, limits and exclusions.'+
                '</div>'+
            '</p>'+
        '</div>';
        var si_heading = '<div class="section-titles toolhover">'+
                            '<h1>Specified items</h1>'+
                         '</div>';
        var si_info = '<div id="si_info">'+
            '<p id="" style="display:inline-block;">'+
                '<img id="" src="/images/help_icon_2.png" title="info" alt="info">'+
                '<span id="si_text">If you have any single items valued at £1,500 (excluding items of furniture that are not antiques) or more, or any pedal cycles valued above £500 you need to specify them here.You will not be covered for such items if they have not been specified.</span>'+
            '</p>'+
        '</div>';
        
        function contentsCoverSelection(){
            $("#label_contentsCovers_sc").click(function(){
                $('.cc_seg_label.active_sellection').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                $('#cadc #contentsCovers_sc').attr('checked',true);
                $("#contents-extra #contentsCovers_1").attr('checked',true);
                $("#tooltip_cc #label_contentsCovers_1").removeClass().addClass('selected');
                document.cookie = "contentsCovers_sc = true;path=/;expires=0";
                document.cookie = "contentsCovers_1 = true;path=/;expires=0"; 
                document.cookie = "contentsCovers_adc=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "contentsCovers_2=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            });
            $("#label_contentsCovers_adc").click(function(){
                $('.cc_seg_label.active_sellection').removeClass('active_sellection');
                $(this).addClass('active_sellection');
                $('#cadc #contentsCovers_adc').attr('checked',true);
                $("#contents-extra #contentsCovers_2").attr('checked',true);
                $("#tooltip_cc #label_contentCovers_2").removeClass().addClass('selected');
                document.cookie = "contentsCovers_adc = true;path=/;expires=0";
                document.cookie = "contentsCovers_2 = true;path=/;expires=0"; 
                document.cookie = "contentsCovers_sc=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "contentsCovers_1=true;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
            });
        }
        
        function contents(){
            $('#qtip-2').hide();
            $('#postalAddressPanel #tooltip_riskPostalAddress').hide();
            $(contentsAccidentalDamage).insertBefore('#tooltip_contentsNcdYears');
            $(adc_info).appendTo("#cadc");
            $("#contentsCoversExtras #tooltip_contentsNcdYears").find("dd").hide();
            $(ncd_tooltips).insertAfter($("#contentsCoversExtras #tooltip_contentsNcdYears").find("dd")[0]);
            ncd_selection();
            ncd_tooltipscookey();
            $("#tooltip_cve #vol-excess").find("dd").hide();
            $(cvec_tooltips).insertAfter($("#tooltip_cve #vol-excess").find("dd")[0]);
            cvec_selection();
            cvec_tooltipscookey();
            $("#tooltip_cah dl#contentHomeMessageAnchor").find("dd").prepend(poundSym).append(crc);
            $("#tooltip_cafh").removeClass("tooltip").find("dd").prepend(poundSym); 
            $(pp_info).appendTo("#tooltip_cafh");
            $("#tooltip_si dl#contentsSpecifiedItemsMessageAnchor .radio-dt-spacer").text("Do you have any Specified Items?");
            $("#tooltip_si").removeClass("tooltip").prepend(si_heading);
            $(si_info).appendTo("#tooltip_si");
            $("#specifiedItemsPanel .section-titles").hide();
            $("#specifiedItems #tooltip_it").removeClass("toolhover");
            $("#contentsSpecifiedItemsMessageAnchor").addClass("toolhover");
            var acrc = approContentCover();
            $("#acrc").text(acrc);
        }
       
        $('#contents').click(function(e){
            $('div.seg-label-large.cover_selected').removeClass('cover_selected');
            $('span.cover_title.selected_title').removeClass('selected_title');
            $(this).find('.cover_title').addClass('selected_title');
            $(this).addClass('cover_selected');
            $('#radio_contentsCovers_1').click();
            $(".form-background:eq(1) .section-titles h1").css('color','#0971b0');
            $(".form-background:eq(0) .section-titles h1").css('color','rgb(189, 189, 189)');
            $("#home_blueIcon").replaceWith(homeIcon_grey);
            $("#contents_greyIcon").replaceWith(contentsIcon_blue);
            $(".form-background:eq(0)").children().filter(":not(.section-titles)").hide(); 
             setTimeout(function(){ 
                contents();
                coverSelectionCookie();
                contentsCoverSelection();
                /******************* Tracking Contents Accident Cover and Contents Personal possessions custom events ***********************/
                window['optimizely'] = window['optimizely'] || [];
                $('#label_contentsCovers_adc').click(function(){
                    if ($("#label_contentsCovers_adc").hasClass('active_sellection')) {
                        window.optimizely.push(["trackEvent", "contentsADC"]);	
                    }
                });
                $('input#next.go-to-next').click(function(){
                     if($("#contentAway").val() > 0){
                        window.optimizely.push(["trackEvent", "contentsPPC"]);	 
                    } 
                }); 
             }, 600);
            e.preventDefault();
        });

       /******************* Buildings and Content Cover Section*****************/
        
        $('#buildings_contents').click(function(e){
            $('div.seg-label-large.cover_selected').removeClass('cover_selected');
            $(this).addClass('cover_selected');
            $('span.cover_title.selected_title').removeClass('selected_title');
            $(this).find('.cover_title').addClass('selected_title');
            $('#radio_buildingsCovers_1').click();
            $('#radio_contentsCovers_1').click(); 
            $(".form-background .section-titles h1").css('color','#0971b0');
            $("#home_greyIcon").replaceWith(homeIcon_blue);
            $("#contents_greyIcon").replaceWith(contentsIcon_blue);
            setTimeout(function(){ 
                buildings();
                contents();
                coverSelectionCookie();
                buildingsCoverSelection();
                contentsCoverSelection();
                //console.log($("input[name='buildingsCovers']:checked").val());
                  /******************* Tracking Building Accident Cover custom event ***********************/
                $('#label_buildingsCovers_adc').click(function(){
                    window['optimizely'] = window['optimizely'] || [];
                    if ($("#label_buildingsCovers_adc").hasClass('active_sellection')) {
                        window.optimizely.push(["trackEvent", "buildingADC"]);	
                    }
                });
                 /******************* Tracking Contents Accident Cover and Contents Personal possessions custom events ***********************/
                window['optimizely'] = window['optimizely'] || [];
                $('#label_contentsCovers_adc').click(function(){
                    if ($("#label_contentsCovers_adc").hasClass('active_sellection')) {
                        window.optimizely.push(["trackEvent", "contentsADC"]);	
                    }
                });
                 $('input#next.go-to-next').click(function(){
                     if($("#contentAway").val() > 0){
                        window.optimizely.push(["trackEvent", "contentsPPC"]);	 
                    } 
                }); 
             }, 600);
            e.preventDefault();
        });


        /******************** To hide the broken Info icon on postcode address **********************/
      
        $('#label_riskAddressSameAsInsuredAddressFlag_1').click(function(){
            setTimeout(function(){
                if( $('#label_movingToInsuredAddressFlag_0').length > 0){
                hidePostalAddressTooltip();
              } 
            },400);
             
        });
        
        function hidePostalAddressTooltip() {  
            $('#label_movingToInsuredAddressFlag_0').click(function(){  
                setTimeout(function(){
                     if( $('#postalAddressPanel #tooltip_riskPostalAddress').length > 0){
                        $('#postalAddressPanel #tooltip_riskPostalAddress').hide();  
                    }
                },400);
            });
        }
        /************************-- 
        Style  -- 
        ***************************/
        
        var pageCSS =''+
        // Excess
        '#container dd{  padding: 15px 0 25px 0; }'+
        '#container dd#specified-radio{  padding: 0 0 25px 0 !important; }'+
        '.container-vec ul li, #container-cvec ul li{ margin: 0px 5px;}'+
        '#container-vec{ left: 10px; top: 15px; }'+
        '.excess_panel, .contentexcess_panel { width: 360px; position: relative; height: 28px; border: none; border-radius: 3px 3px 3px 3px;margin-left:10px;}'+
        '.excess_panel li{ font-size: 14px; display: inline-block; width: 60px; list-style: none; padding: 7px 0px; text-align: center; font-weight: 400; color:#494949; border-left: 1px solid #fff; background-color: #f3f0ec; cursor: pointer; float: left; height: 20px; }'+
        '.excess_panel li:first-child{border-left: 0px solid transparent; border-radius:3px;}'+
        '.excess_panel li:hover{background-color:#85C1E9;}'+
        '.excess_panel li:last-child{ min-width: 63px; }'+
        '.contentexcess_panel li{ font-size: 14px; display: inline-block; width: 45px; list-style: none; padding: 7px 0px; text-align: center; font-weight: 400; color:#494949; border-left: 1px solid #fff; background-color: #f3f0ec; cursor: pointer; margin: 0px 5px; float: left; height: 20px; }'+
        '.excess_bottom{ position: relative; margin: 3px 0px 30px;}'+
        '.excess_bottom span{ padding:0px 7px; background-color: gray; color: #fff; text-align: center; display: inline-block; font-size: 12px; letter-spacing: 0.7px; }'+
        '.excess_bottom span:nth-child(1){border-right:1px solid #fff;}'+
        '.excess_bottom span:nth-child(2){min-width: a231px;}'+
        '.active_sellection{background-color: #0971b0!important;color: #fff!important;}'+
        '.active_sellection:hover,.selected:hover{background-color: #0971b0!important;color: #fff;}'+
        '#pouSym{ font-size:15px; margin-left:10px;}'+
        '#label_contentsCovers_2, #label_contentsCovers_0{margin-left:15px;}'+
        '#buildingsCoversExtras fieldset{ height:auto;}'+
        '#buildings_contents{ width: 170px; }'+
        '.top_header{width:100%; padding-bottom: 30px; border-bottom: 1px solid #F5F5F5;}'+
        '#r_par{float: left; width: 150px;}'+
        '.seg-label-large{ cursor:pointer; text-align:center; display:inline-block; margin-left:10px; height:75px; width:90px; background-color:#f3f0ec; border: solid 1px #ececec; border-radius: 4px;}'+
        '.seg-label-large span{ display:inline-block; color:#494949;font-family: MuseoSansRounded-700;font-weight: 400;font-size: 16px; padding-top: 5px;}'+
        '#bvce_text, #pp_text, #si_text{ font-family: "MuseoSansRounded-300", Arial, Verdana;font-weight: 400;font-size: 14px;line-height: 20px;float:right;width:95%;}'+
        '#conReplacement{ font-family: "MuseoSansRounded-300", Arial, Verdana; margin-top:10px;font-size: 12px;line-height: 18px;float:right;width:93%; }'+
        '#adc_info, #pp_info, #si_info{ border: 1px solid #e2e2e2; padding: 10px 20px; background-color: #e5f6fe; }'+
        '#radio_buildingsCovers_2, #radio_buildingsCovers_0, #description_buildingsCovers_2, #description_buildingsCovers_0 { display: inline; height: auto; }'+
        '#home_grey,#home_blue{width:35px;float:left;}'+'#yourCover_home{width: 50px; position: absolute; left: 30px;}'+
        '#contents_grey,#contents_blue{width:47px;float:left;}'+'#yourCover_contents{width: 70px; position: absolute; left: 125px; top:16px;}'+
        '.cover_selected{background-color:'+ light_blue +'; color:#fff;}'+
        '.selected_title{color:#fff!important;}'+
        '#yourCoverHomeContents{width: 48px; position: absolute; right: 155px; top: 23px;}'+
        '#yourCoverContentsHome{ width: 65px; position: absolute; right: 72px; top: 13px;}'+
        '#plusSym{ width: 48px; position: absolute; right: 120px; top: 40px;}'+
        '.qtip_content h2{ margin-right: 1.5em;}'+'.qtip-content{ margin-right: 1em;}'+
        '.qtip-esure .qtip-icon{ display: block;background: none repeat scroll 0 0 #ffffff; border: none; border-radius: 0px; color:#0971b0; top:-1px; right: -1px;}';
        
        var headofdoc = document.getElementsByTagName('head')[0];
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(pageCSS));
        headofdoc.appendChild(s);
      }
  };

  try { 
    //* call variation
    yourCoverPage.init();
    //* stop loading page after 1 second
    setTimeout(function(){
      redTag.loadingBar(false);
    }, 400);
  }
  catch(err) { 
    redTag.loadingBar(false); 
  }

})();

  


