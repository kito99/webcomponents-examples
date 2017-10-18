(function() {

	/**
	 Declare the template here so it can be re-used by multiple instances of the element.
	 Cloning from the template instead of using innerHTML is more performant since the markup
	 is only parsed once.
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

        	.counter-disabled {
           	 	color: gray;
        	}
		</style>
		
		<span id="value" class="counter counter-disabled">Counter</span>
		
		`;

	/**
	 vt-shadow-dom-counter example custom element (v1 spec)

	 @author Kito D. Mann (kito-public at virtua dot com), http://virtua.tech
	 */
	class VirtuaTrainingShadowDomCounter extends VirtuaTrainingCounter {

		/**
		 * @override
		 */
		constructor() {
			super();

			console.log('inside overridden constructor');
			const templateContent = template.content.cloneNode(true);
			this._content = templateContent.getElementById('value');
			this.attachShadow({mode: 'open'});
			this.shadowRoot.appendChild(templateContent);

			this._onClick = this._onClick.bind(this);
		}

		/**
		 * Fires when an instance was inserted into the document.
		 * @override
		 */
		connectedCallback() {
			console.log('inside overridden connectedCallback');
			this._upgradeProperty('first');
			this.value = this.first || 0;
		}
	}


	// Registers <vt-shadow-dom-counter> as a custom element
	window.customElements.define('vt-shadow-dom-counter', VirtuaTrainingShadowDomCounter);
})();