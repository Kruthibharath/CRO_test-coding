function lifeInsuBanner (){    
    var selector = document.querySelector('.columns.is-multiline.policies');      
    if (selector) {
        var lifeInsuranceBG = "https://cro-kruthi.s3-us-west-2.amazonaws.com/GettyImages-601822259.jpg"; 
        var LG_description = 'Help protect your loved ones with &nbsp;<b>Life Insurance</b> from £6 per month'; 
        var LG_promo_text1 ='Get a';
        var LG_bold_promo_text = ' £75 M&S or Amazon Gift Card';
        var LG_promo_text2 = ' to say thank you for taking out a policy. ';
        var LG_condition_text = 'Redeemable after your policy has been live for 6 months. T&Cs apply';

        var style = document.createElement('style');
        var incomingClass = '.banner_content { display: flex; }'+
        '.lifeInsuranceBanner{ margin-top: 20px; } .large_text{ font-size: 1.5rem; } #sub-text{ font-size: 11px; margin-top: 10px; color: #084c75; }'+
        '.promo_img_div{ display:flex; position: relative; } .promo { color: #DD4E30; margin: 20px 0px -5px 0px;} .boldPromo{ font-size:30px; } .description{ margin-left: 10px;} .CTA_wrapper { margin-top: 30px; } .large_text > div { font-size:1.4rem; line-height:1.2; font-weight: 700;} #lifeInsuarBGimage { margin-left: 20px; margin-right: 20px; }'+
        '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) { .promo { margin: 10px 0px -10px 0px; } .boldPromo{ font-size: 25px; } .description > .large_text{ line-height:1.1em; } .CTA_wrapper { margin-top: 10px; } .large_text > div {font-size: 1.1rem; line-height: 1.1} #lifeInsuarBGimage { margin-left: 0px; margin-right: 10px; } #sub-text{ font-size: 10px; margin-top: 15px;}}'+
        '@media only screen and (max-width:767px){.banner_content {flex-flow:column} #lifeInsuarBGimage { margin-left: 0px; margin-right: 0px; } .boldPromo{ font-size: 25px; } .large_text{ font-size: 1.5em; line-height:1.6rem; margin: 8px 0px; }.large_text > div {font-size: 0.9rem; line-height: 1.1} .CTA_wrapper { margin-top: 10px; }}';

        var incomingDiv = '<div class="box lifeInsuranceBanner"><div class="banner_content"> <div class="promo_img_div"><div id="lifeInsuarBGimage"></div></div><div class="description"><div class="large_text">'+ LG_description +'</div><div class="providers"> Provided by Legal & General </div><div class="CTA_wrapper"><a href="#" class=" button is-link is-rounded">Get a quote</a></div><div class="promo large_text"><div>'+ LG_promo_text1 +'<span class="boldPromo">'+ LG_bold_promo_text +'</span>'+ LG_promo_text2 +'</div></div><div id="sub-text">'+ LG_condition_text +'</div></div></div></div>';

        style.type = 'text/css';
        style.innerHTML = incomingClass;
        document.head.appendChild(style);
        selector.insertAdjacentHTML("afterend", incomingDiv);

        function getImages(imageURL, selector) {
            var img = document.createElement("img");
            var src = document.getElementById(selector);
            src.appendChild(img);
            img.src = imageURL;
            img.setAttribute('width','740px');
            img.setAttribute('height','235px');
        }
        if (lifeInsuranceBG) {
            getImages(lifeInsuranceBG, "lifeInsuarBGimage");
        }
       clearInterval(lifeInsuBannerTest);
    }
}
var lifeInsuBannerTest = setInterval(lifeInsuBanner,100);

