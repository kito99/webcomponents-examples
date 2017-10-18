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
	 vt-counter example custom element (v1 spec)

	 @author Kito D. Mann (kito-public at virtua dot com), http://virtua.tech
	 */
	class VirtuaTrainingCounter extends HTMLElement {

		// Store properties as attributes so they work both ways.
		get first() {
			return this.getAttribute('first');
		}

		set first(first) {
			this.value = Number(first);
			this.setAttribute('first', first);
		}

		// Don't store this property as an attribute because it changes frequently.
		get value() {
			return this._value;
		}

		set value(value) {
			const num = Number(value);
			this._value = num;
			this._content.innerText = num;
		}

		constructor() {
			super();
			this._onClick = this._onClick.bind(this);
		}

		/** Fires when an instance was inserted into the document */
		connectedCallback() {
			const templateContent = template.content.cloneNode(true);
			this._content = templateContent.getElementById('value');
			this.appendChild(templateContent);

			this._upgradeProperty('first');
			this.value = this.first || 0;
			this.addEventListener('click', this._onClick);
		}

		/** Fires when an instance was removed from the document */
		disconnectedCallback() {
			this.stop();
			this.removeEventListener('click', this._onClick);
		};

		/** Fires when an attribute was added, removed, or updated */
		attributeChangedCallback(attr, oldVal, newVal) {
		}

		/** Fires when the element is moved to a new document */
		adoptedCallback() {
		}

		start() {
			this._content.classList.remove('counter-disabled');
			this._timer = setInterval(() => {
				this.value++;
			}, 2000);
			this.dispatchEvent(new CustomEvent('vt-counter-started', {
				detail: {
					value: this.value,
				},
				bubbles: true
			}));
		}

		stop() {
			clearInterval(this._timer);
			this._timer = null;
			this._content.classList.add('counter-disabled');
			this.dispatchEvent(new CustomEvent('vt-counter-stopped', {
				detail: {
					value: this.value,
				},
				bubbles: true
			}));
		}

		_onClick() {
			if (!this._timer) {
				this.start();
			}
			else{
				this.stop();
			}
		}

		/**
		 * If the property was set before the element was upgraded,
		 * remove it and set it again so that the proper setter is used.
		 */
		_upgradeProperty(prop) {
			if (this.hasOwnProperty(prop)) {
				let value = this[prop];
				delete this[prop];
				this[prop] = value;
			}
		}
	}


// Registers <vt-counter> as a custom element
	window.customElements.define('vt-counter', VirtuaTrainingCounter);
})();