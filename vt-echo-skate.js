import {props, withComponent} from './node_modules/skatejs/esnext/index.js';

/**
 vt-echo-skate example custom element (v1 spec) using SkateJS. Simply renders `message` inside <span>.

 @author Kito D. Mann (kito-public at virtua dot com), http://virtua.tech
 */

const Component = withComponent();
class VirtuaTrainingEchoSlate extends Component {

    constructor() {
        super();
        console.log('inside constructor');
        this.message = '';
    }

    /** Skate-specific callback to use for actual rendering. */
    rendererCallback(renderRoot, renderCallback) {
        renderRoot.innerHTML = '';
        renderRoot.appendChild(renderCallback());
    }

    /** Skate-specific callback that returns content to be rendered. */
    renderCallback({message}) {
        console.log('inside renderCallback');
        let el = document.createElement('span');
        el.innerHTML = message;
        return el;
    }

    /** Skate-specific callback when rendering has completed */
    renderedCallback() {
        console.log('inside renderedCallback');
    }

    /** Fires after an instance has been inserted into the document */
    connectedCallback() {
        super.connectedCallback();
        console.log('inside connectedCallback');
    }

    /**
     * Fires after an instance has been removed from the document. Here
     * we stop the timer and remove event listeners.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        console.log('inside disconnectedCallback');
    };

    /**
     * Fires after an attribute has been added, removed, or updated. Here we
     * change the `value` to `first` and restart the timer if `first` changes.
     */
    attributeChangedCallback(attr, oldVal, newVal) {
        super.attributeChangedCallback(attr, oldVal, newVal);
        console.log('inside attributeChangedCallback', 'attr:', attr, 'oldVal:', oldVal, 'newVal:', newVal);
    }

    /** Fires after an element has been moved to a new document */
    adoptedCallback() {
        super.adoptedCallback();
        console.log('inside adoptedCallback');
    }
}

VirtuaTrainingEchoSlate.props = { message: props.string };
VirtuaTrainingEchoSlate.is = 'vt-echo-skate';


// Registers <vt-echo-slate> as a custom element
window.customElements.define('vt-echo-skate', VirtuaTrainingEchoSlate);
