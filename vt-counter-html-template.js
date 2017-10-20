(function() {

	/**
	 * Declare the template here so it can be re-used by multiple instances of the element.
	 * Cloning from the template instead of using innerHTML is more performant since the markup
	 * is only parsed once.
	 */
	const template = document.createElement('template');
	template.innerHTML = `
	
		<style>
		    .counter {
            	color: indigo;
            	font-size: 60pt;
            	font-family: sans-serif;
            	text-align: center;
            	padding: 10px;
            	border: 1px black inset;
        	}
        	
            .counter:hover {
            	cursor: pointer;
        	}

        	.counter-disabled {
           	 	color: gray;
        	}
		</style>
		
		<span id="value" class="counter counter-disabled">Counter</span>
		
		`;

	/**
	 vt-counter-html-template example custom element (v1 spec)

	 @author Kito D. Mann (kito-public at virtua dot com), http://virtua.tech
	 */
	class VirtuaTrainingHtmlTemplateCounter extends VirtuaTrainingCounter {

		/**
		 * Fires when an instance was inserted into the document.
		 * @override
		 */
		connectedCallback() {
			console.log('inside overridden connectedCallback')
			const templateContent = template.content.cloneNode(true);
			this._content = templateContent.getElementById('value');
			this.appendChild(templateContent);

			this._upgradeProperty('first');
			this.value = this.first || 0;
		}
	}


	// Registers <vt-counter-html-template> as a custom element
	window.customElements.define('vt-counter-html-template', VirtuaTrainingHtmlTemplateCounter);
})();