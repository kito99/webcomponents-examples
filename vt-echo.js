/**
 vt-echo example custom element (v1 spec). Simple renders `message` inside <span>.

 @author Kito D. Mann (kito-public at virtua dot com), http://virtua.tech
 */
// tag::code[]
class VirtuaTrainingEcho extends HTMLElement {

	static get observedAttributes() {
		return ['message'];
	}

	// Store properties as attributes so they work both ways.
	get message() {
		return this.getAttribute('message');
	}

	set message(message) {
		this.setAttribute('message', message);
	}

	constructor() {
		super();
		console.log('inside constructor');
	}

	/** Fires after an instance has been inserted into the document */
	connectedCallback() {
		console.log('inside connectedCallback');
		this._content = document.createElement('span');
		this._content.innerText = this.message;
		this.appendChild(this._content);
	}

	/**
	 * Fires after an instance has been removed from the document. Here
	 * we stop the timer and remove event listeners.
	 */
	disconnectedCallback() {
		console.log('inside disconnectedCallback');
	};

	/**
	 * Fires after an attribute ahas been added, removed, or updated. Here we
	 * change the `value` to `first` and restart the timer if `first` changes.
	 */
	attributeChangedCallback(attr, oldVal, newVal) {
		console.log('inside attributeChangedCallback', 'attr:', attr, 'oldVal:', oldVal, 'newVal:', newVal);
	}

	/** Fires after an element has been moved to a new document */
	adoptedCallback() {
		console.log('inside adoptedCallback');
	}
}

// Registers <vt-counter> as a custom element
window.customElements.define('vt-echo', VirtuaTrainingEcho);
// end:code[]