const esure851={
	init: function(){
		this.mainJs();
	},
	mainJs: function(){
		console.log('running');
		
		function initMain(){
			let count;
			const textObj={};
			document.querySelectorAll('main .section [data-qa-id="SingleAddons"] es-single-addons [data-qa-id="singleAddon0"] [class="media-content ( enhance-your-cover )"] table tbody tr:last-child button').forEach((item,index)=>{
				if(index==0 || index==1){
					textObj[index]= item.innerText;
				}
				
				if(item.classList.contains('option-selected')){
					count = index;
				}
			});
			
			//console.log(textObj)
			const buttons= `
				<div class="section centerContainer pncd-buttons-container ESURE-851-buttons">
				    <div class="centered-content">
				        <es-button-addon-select data-qa-id="NoPNCDMoveOnButton" class="table-btn">
				            <button class="initial-class ( drawer-btn primary ) ${count ==0? 'option-selected' : ''}"  data-attr ="${count ==0? 'active':'no-active'}">
				                 ${textObj[0]}
				            </button>
				         </es-button-addon-select>
				        <es-button-addon-select data-qa-id="YesPNCDMoveOnButton" class="table-btn">
				            <button class="initial-class ( drawer-btn primary ) ${count ==1? 'option-selected' : ''}"  data-attr ="${count ==1? 'active':'no-active'}">
				                 ${textObj[1]}
				            </button></es-button-addon-select>
				    </div>
                </div>
		
		`;
		
		if(document.querySelector('.ESURE-851-buttons')){
			document.querySelector('.ESURE-851-buttons').remove();
		}
		
		if(document.querySelector('main .section [data-qa-id="SingleAddons"] es-single-addons [data-qa-id="singleAddon0"] [class="media-content ( enhance-your-cover )"]')){
			document.querySelector('main .section [data-qa-id="SingleAddons"] es-single-addons [data-qa-id="singleAddon0"] [class="media-content ( enhance-your-cover )"]').insertAdjacentHTML('beforeend', buttons);
		}
		
	
		
		
	
    
    		(function pollFor(){
    			if(document.querySelector('[data-addon-name="personalInjuryCover"]') && document.querySelector('#nextButton')){
    				//console.log(window.getComputedStyle(document.querySelector('[data-qa-id="singleAddon3"]')).display);
    				//console.log(window.getComputedStyle(document.querySelector('[data-qa-id="singleAddon3"]')).opacity == '0.5');
				if(window.getComputedStyle(document.querySelector('[data-addon-name="personalInjuryCover"]')).display == 'none' || window.getComputedStyle(document.querySelector('[data-addon-name="personalInjuryCover"]')).opacity == '0.5'){
					//console.log('enter',	document.querySelector('#nextButton'))
					setTimeout(()=>{
							document.querySelector('#nextButton').classList.add('custom-none');
					},2500);
		  		
		         }
		         if(window.getComputedStyle(document.querySelector('[data-addon-name="personalInjuryCover"]')).display != 'none' && window.getComputedStyle(document.querySelector('[data-addon-name="personalInjuryCover"]')).opacity != '0.5'){
		         	
		         	//console.log('not enter')
		         		setTimeout(()=>{
							document.querySelector('#nextButton').classList.remove('custom-none');
					},2500);
		  		
		         }
    			}else{
    				setTimeout(pollFor,25);
    			}
    		})();
			
	
	
		}
		
		
		initMain();
		
			
			document.addEventListener('click',(e)=>{
				if(e.target.closest('.ESURE-851-buttons es-button-addon-select')){
					let innText='';
					document.querySelectorAll('.ESURE-851-buttons es-button-addon-select button').forEach((item,index)=>{
						if(item.classList.contains('option-selected')){
							item.classList.remove('option-selected');
							item.setAttribute('data-attr', 'no-active');
						}
					});
					e.target.closest('.ESURE-851-buttons es-button-addon-select button').classList.add('option-selected');
					e.target.closest('.ESURE-851-buttons es-button-addon-select button').setAttribute('data-attr', 'active');
					
					innText = e.target.closest('.ESURE-851-buttons es-button-addon-select button').innerText.trim();
					
						document.querySelectorAll('main .section [data-qa-id="SingleAddons"] es-single-addons [data-qa-id="singleAddon0"] [class="media-content ( enhance-your-cover )"] table tbody tr:last-child button').forEach((item,index)=>{
							if(item.innerText.trim() == innText){
								item.click();
							}
						});
				}
				
				
			});
		
		
		// const targetNode = document.querySelector('main .section [data-qa-id="SingleAddons"] es-single-addons');
		// const config = { attributes: false, childList: true, subtree: false };
		// const callback = (mutationList, observer) => {
		//   for (const mutation of mutationList) {
		//   	if(!document.querySelector('.ESURE-851-buttons')){
		//   		initMain();
		//   		return;
		//   	}
		//   }
		// };
		// const observer = new MutationObserver(callback);
		// observer.observe(targetNode, config);
		
		  new MutationObserver(() => {
            if (!document.querySelector('.ESURE-851-buttons') && location.href.includes('/motor/cover-options')) {
                	initMain();
            }
        }).observe(document, { subtree: true, childList: true, attributes: true });
	}
};




(function pollFor(){
	if(document.querySelector('main .section [data-qa-id="SingleAddons"] es-single-addons') && document.querySelector('[data-qa-id="singleAddon3"]') && document.querySelector('#nextButton') && esureDataLayer.pageName.indexOf('MOTOR Motor Legal Protection') >=0){
		esure851.init();
    console.log(' Add-ons CTAs (MLP): V:1.1');
	}else{
		setTimeout(pollFor, 10);
	}
})();