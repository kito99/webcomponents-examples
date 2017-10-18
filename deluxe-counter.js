/**
 deluxe-counter example custom element

 @author Kito D. Mann (kito-public at virtua dot com), http://virtua.tech
 */
// tag::create-element2[]
class DeluxeCounter extends SimpleCounter {
// end::create-element2[]

// tag::create-callback-element2[]
	/** Fires when an instance was inserted into the document */
	connectedCallback() {
		this.innerHTML = '';
		this._content = document.createElement('div');
		this._content.innerText = "Deluxe Counter";
		this._content.className = "counter-disabled";
		this.appendChild(this._content);
		this.count = Number(this.first) || 0;
		this.onclick = () => {
			if (this._timer === null) {
				this.start();
			}
			else{
				this.stop();
			}
		}
	};

// end::create-callback-element2[]

// tag::overrides-element2[]
	start() {
		super.start();
		this._content.className = "";
	}

	stop() {
		super.stop();
		this._content.className = "counter-disabled";
	}

	update(counterValue) {
		this._content.innerText = counterValue;
	}

// end::overrides-element2[]
}
// tag::register-element2[]
// Registers <deluxe-counter> as a custom element
window.customElements.define('deluxe-counter', DeluxeCounter);
// end::register-element2[]