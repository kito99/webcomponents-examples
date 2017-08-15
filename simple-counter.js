/**
 simple-counter example custom element (v1 spec)

 @author Kito D. Mann (kito-public at virtua dot com)
 */
// tag::create-element1[]
/** Creates an object based on the HTML SimpleCounterPrototype prototype */
class SimpleCounter extends HTMLElement {
// end::create-element1[]

	// tag::variables[]
	constructor() {
		super();
		this.count = 0;
		this.timer = null;
		this.innerText = "Simple Counter";
	}
	// end::variables[]

	// tag::element1-callbacks[]
	/** Fires when an instance was inserted into the document */
	connectedCallback() {
		this.count = Number(this.getAttribute("start")) || 0;
		this.start();
	};

	/** Fires when an instance was removed from the document */
	disconnectedCallback() {
		this.stop();
	};

	/** Fires when an attribute was added, removed, or updated */
	attributeChangedCallback(attr, oldVal, newVal) {
		if (attr === "start") {
			this.count = Number(newVal);
		}
	}

	/** Fires when the element is moved to a new document */
	adoptedCallback() {
		console.log("Someone adopted me!", this);
	}

	start() {
		let _self = this;
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
}
// end::element1-callbacks[]

// tag::register-element1[]
// Registers <simple-counter> with the window
window.customElements.define('simple-counter', SimpleCounter);
// end::register-element1[]