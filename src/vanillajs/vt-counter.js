/**
 vt-counter example custom element (v1 spec). Counts up from `first` (or 0 if `first` is
 not defined). Starts and stops when a user clicks on it.

 @author Kito D. Mann (kito-public at virtua dot com), http://virtua.tech
 */
class VirtuaTrainingCounter extends HTMLElement {

    static get observedAttributes() {
        return ['first'];
    }

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
        console.log('inside constructor');
        this._onClick = this._onClick.bind(this);
        this.addEventListener('click', this._onClick);
    }

    /** Fires after an instance has been inserted into the document */
    connectedCallback() {
        console.log('inside connectedCallback');
        this._content = document.createElement('span');
        this._content.innerText = 'Counter';
        this._content.className = 'counter-disabled';
        this.appendChild(this._content);

        this._upgradeProperty('first');
        this.value = this.first || 0;
    }

    /**
     * Fires after an instance has been removed from the document. Here
     * we stop the timer and remove event listeners.
     */
    disconnectedCallback() {
        console.log('inside disconnectedCallback');
        this.stop();
        this.removeEventListener('click', this._onClick);
    };

    /**
     * Fires after an attribute has been added, removed, or updated. Here we
     * change the `value` to `first` and restart the timer if `first` changes.
     */
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('inside attributeChangedCallback', 'attr:', attr, 'oldVal:', oldVal, 'newVal:', newVal);
        switch (attr) {
            case 'first' :
                // attributeChangedCallback is called before connectedCallback, so this._content
                // may not be defined yet.
                if (this._content) {
                    this.value = newVal;
                    this.stop();
                    this.start();
                }
                break;
        }
    }

    /**  Fires after an element has been moved to a new document. Not polyfilled. */
    adoptedCallback() {
        console.log('inside adoptedCallback');
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