//hides overlay
function removeOverlay() {
  document.querySelector('.overlay-container--inactive').classList.remove('overlay-container--active');
  document.querySelector('.contact-card').classList.remove('contact-card--active');
  document.querySelector('body').classList.remove('stop-scroll');
  setTimeout(function() {
		document.querySelector('.overlay').classList.remove('overlay--active');
  },1500);
}
//shows overlay
function showOverlay() {
document.querySelector('.overlay').classList.add('overlay--active');
  document.querySelector('.overlay-container--inactive').classList.add('overlay-container--active');
  document.querySelector('.contact-card').classList.add('contact-card--active');
  document.querySelector('body').classList.add('stop-scroll');
}
setInterval(function(){
  var overlayExists = document.querySelector('.homeInsuranceOffer');
  var urlTarget = "https://www.esure.com";
 
  if(!overlayExists && window.location.href == urlTarget) {
		/*var selector = document.querySelector('.dialog-off-canvas-main-canvas');
		var incomingDiv= '<div class="box RAC"><div class="RAC__logo"></div><p class="RAC__copy">Need breakdown cover this winter? Add from <b>£38.14</b> per year</p><button type="button" class="RAC__button button is-link is-rounded">Add to cover</button></div>';
		selector.insertAdjacentHTML("afterend", incomingDiv);*/
  
    var style = document.createElement('style');
        var incomingClass = '.stop-scroll { height: 100%; overflow: hidden; }'+
            '* { paddigng: 0; margin: 0; } .tutorial-popup { position: absolute; top: 65px; left: calc(50% - 140px); max-width: 285px; background-color: #ffffff; padding: 40px 20px; color: black; text-align: left; margin: auto; border-radius: 8px; border: 2px solid #242424; transform: translateX(-400%) translateY(calc(50% - 80px)); transition: transform 1.3s ease-in-out; transition: transform 1.3s cubic-bezier(0.6, -0.28, 0.74, 0.05);}'+
            '.arrow { position: absolute; border: solid black; border-width: 0 2px 2px 0; display: inline-block; padding: 13px; } .up { top: -16px; left: 125px; transform: rotate(-135deg); -webkit-transform: rotate(-135deg); background-color: white; }.left { transform: rotate(135deg); -webkit-transform: rotate(135deg);  left:-16px; bottom:125px; background-color: white; }.down{ transform: rotate(45deg); -webkit-transform: rotate(45deg);  left:125px; bottom:-16px; background-color: white; }'+
            '.tutorial-intro-popup--active { transform: translateX(0) translateY(calc(50% - 80px)); transition: transform 1.3s cubic-bezier(0.69, 1.2, 0.63, 1.14);}'+
            '.tutorial-policyCard-popup--active { transform: translateX(calc(25% - 328px)) translateY(calc(72% - 140px)); transition: transform 1.6s cubic-bezier(0.69, 1.2, 0.63, 1.14);}'+
            '.tutorial-documents-popup--active { transform: translateX(calc(0% - 310px)) translateY(calc(60% - 200px)); transition: transform 1.6s cubic-bezier(0.69, 1.2, 0.63, 1.14);}'+
            '.tutorial-changes-popup--active { transform: translateX(calc(0% - 100px)) translateY(calc(20% - 20px)); transition: transform 1.6s cubic-bezier(0.69, 1.2, 0.63, 1.14);}'+
            '.tutorial-quickLinks-popup--active { transform: translateX(calc(70% - 100px)) translateY(calc(50% - 85px)); transition: transform 1.6s cubic-bezier(0.69, 1.2, 0.63, 1.14);}'+
            '#CTA_wrapper { text-align: center; }.close { position: absolute; right: 10px; top: 10px; cursor: pointer } .close i { font-size: larger; border-radius: 50%; }'+
            '.tutorial-popup-description { max-width: 240px; font-size: 14px; font-weight: 300; margin: auto; margin-bottom: 10px; }'+
            '.overlay { position: fixed; top: 0; left: 0; z-index: -1; height: 100%; width: 100%; } .overlay--active { z-index: 6; } .overlay-container--inactive { height: 100%; background-color: rgba(0, 0, 0, 0); transition: background-color 1s ease-in-out; } .overlay--active .overlay-container--active { background-color: rgba(0, 0, 0, 0.5); } .overlay strong { color: white; } '+
            '.back_button{ margin-right: 30px;} .invisible{ display: none;} .is-visible{ display: inline-block; }';
    
        var introDescription = "My Account is your customer portal where you can easily carry out changes to your policy, view documents and get access to personal customer offers";
    
        var overlayMarkup = '<div class="overlay-container--inactive"></div><div class="tutorial-popup"><i class="arrow up"></i> <div class="tutorial-heading"></div> <div class="close"><i class="fa fa-times" aria-hidden="true"></i></div><div class="tutorial-popup-description">' + introDescription + '</div><div id="CTA_wrapper"><button type="button" class="back_button button invisible is-link is-rounded">Back</button><button type="button" class="continue__button continue_toPolicies button is-link is-rounded">Continue</button></div></div>';

        style.type = 'text/css';
        style.innerHTML = incomingClass;
        document.head.appendChild(style);

var tutorialPopUp = 
'<div class="modal" id="tutorialPopUp">'+
'<div class="modal-background ng-tns-c64-10"></div>'+
    '<div class="modal-card ng-tns-c64-10">'+
        '<header class="modal-card-head ng-tns-c64-10"><button type="button" class="delete ng-tns-c64-10 ng-star-inserted"></button></header>'+
        '<section class="modal-card-body ng-tns-c64-10">You are about to be directed to theMy Policies page for the My Account tutorial to begin</section>'+
        '<footer class="modal-card-foot ng-tns-c64-10"><div modalfooter></div>'+
            '<div modalfooter class="buttons ng-tns-c64-10">'+
                '<button class="button is-rounded">Continue</button>'+
            '</div>'+
        '</footer>'+
        '</div>'+
'</div>';
var incomingComponent = document.createElement("div");
var newDiv = document.querySelector('body').appendChild(incomingComponent); 
newDiv.innerHTML = tutorialPopUp;

tutorialDiv.addEventListener('click', showPopUp);
},800);