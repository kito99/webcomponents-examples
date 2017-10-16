/**
 simple-counter example custom element (v1 spec)

 @author Kito D. Mann (kito-public at virtua dot com), http://virtua.tech
 */
// tag::create-element1[]
/** Creates an object based on the HTML SimpleCounterPrototype prototype */
class SimpleCounter extends HTMLElement {
// end::create-element1[]

	// Store properties as attributes so they work both ways.
	// tag::props
	get first() {
		return this.getAttribute('first');
	}

	set first(first) {
		this.count = Number(first);
		this.setAttribute('first', first);
	}

	// end:props

	// tag::variables[]
	constructor() {
		super();
		this.count = 0;
		this.timer = null;
	}

	// end::variables[]

	// tag::element1-callbacks[]
	/** Fires when an instance was inserted into the document */
	connectedCallback() {
		this.innerText = 'Simple Counter';
		this.count = Number(this.first) || 0;
		this.start();
	};

	/** Fires when an instance was removed from the document */
	disconnectedCallback() {
		this.stop();
	};

	/** Fires when an attribute was added, removed, or updated */
	attributeChangedCallback(attr, oldVal, newVal) {
	}

	/** Fires when the element is moved to a new document */
	adoptedCallback() {
	}

	start() {
		const _self = this;
		this.timer = setInterval(function() {
			_self.count = _self.count + 1;
			_self.update(_self.count);
		}, 2000);
	}

	stop() {
		clearInterval(this.timer);
		this.timer = null;
	}

	update(counterValue) {
		this.innerHTML = counterValue;
	}

	// end::element1-callbacks[]
}


// tag::register-element1[]
// Registers <simple-counter> as a custom element
window.customElements.define('simple-counter', SimpleCounter);
// end::register-element1[]