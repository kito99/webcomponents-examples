/**
 vt-counter example custom element (v1 spec). Counts up from `first` (or 0 if `first` is
 not defined). Starts and stops when a user clicks on it.

 @author Kito D. Mann (kito-public at virtua dot com), http://virtua.tech
 */
class VirtuaTrainingCounter extends HTMLElement {

    static get observedAttributes() {
        return ['value', 'interval'];
    }

    // Store properties as attributes so they work both ways.
    get interval() {
        const attr = this.getAttribute('interval');
        return attr ? Number(attr) : 2000;
    }

    set interval(interval) {
        this.setAttribute('interval', interval);
        this.stop();
        this.start();
    }

    // Don't store this property as an attribute because it changes frequently.
    get value() {
        if (!this._value) {
            this._value = 0;
        }
        return this._value;
    }

    set value(value) {
        const num = Number(value);
        this._value = num;
        if (this._content) {
            this._content.innerText = num;
        }
    }

    constructor() {
        super();
        console.log('inside constructor');
        this._onClick = this._onClick.bind(this);
    }

    /** Fires after an instance has been inserted into the document */
    connectedCallback() {
        console.log('inside connectedCallback');
        this._content = document.createElement('span');
        this._content.innerText = 'Counter';
        this._content.className = 'counter-disabled';
        this.appendChild(this._content);

        this._upgradeProperty('value');
        this._upgradeProperty('interval');

        this.addEventListener('click', this._onClick);
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
     * Fires after an attribute has been added, removed, or updated. Updates `value` property if the `value` attribute
     * is updated.
     */
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('inside attributeChangedCallback', 'attr:', attr, 'oldVal:', oldVal, 'newVal:', newVal);
        if (attr === 'value') {
            this.value = newVal;
        }
    }

    /** Fires after an element has been moved to a new document. Not polyfilled. */
    adoptedCallback() {
        console.log('inside adoptedCallback');
    }

    start() {
        this._content.classList.remove('counter-disabled');
        this._content.innerText = this.value;
        this._timer = setInterval(() => {
            this.value++;
        }, this.interval);
        this.dispatchEvent(new CustomEvent('vt-counter-started', {
            detail: {
                value: this.value,
            },
            bubbles: true,
            cancelable: true,
            composed: true
        }));
    }

    stop() {
        if (this._timer) {
            clearInterval(this._timer);
            this._timer = null;
            this._content.classList.add('counter-disabled');
            this.dispatchEvent(new CustomEvent('vt-counter-stopped', {
                detail: {
                    value: this.value
                },
                bubbles: true,
                cancelable: true,
                composed: true
            }));
        }
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
            const value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
}

// Registers <vt-counter> as a custom element
window.customElements.define('vt-counter', VirtuaTrainingCounter);