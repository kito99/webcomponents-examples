import {props, withComponent} from '../../node_modules/skatejs/esnext/index.js';

/**
 vt-echo-skate example custom element (v1 spec) using SkateJS. Simply renders `message` inside <span>.

 @author Kito D. Mann (kito-public at virtua dot com), http://virtua.tech
 */

/** withComponent includes withChildren, withProps, withRenderer and withUnique mixins */
const Component = withComponent();

class VirtuaTrainingEchoSkate extends Component {

    constructor() {
        super();
        console.log('inside constructor');
        this.message = '';
    }

    /** Skate callback from withRenderer; performs the actual rendering */
    rendererCallback(renderRoot, renderCallback) {
        renderRoot.innerHTML = '';
        renderRoot.appendChild(renderCallback());
    }

    /** Skate callback from withRenderer; returns content to be rendered. */
    renderCallback({message}) {
        console.log('inside renderCallback');
        let el = document.createElement('span');
        el.innerHTML = message;
        return el;
    }

    /** Skate callback from withRenderer; called when rendering has completed */
    renderedCallback() {
        console.log('inside renderedCallback');
    }

    /** Skate callback from withProps; called when properties have been set (not necessarily changed) */
    propsSetCallback(next, prev) {
        console.log('inside propSetCallback', 'next:', next, 'prev:', prev);
    }

    /** Skate callback from withProps; called when properties have changed */
    propsChangedCallback(next, prev) {
        super.propsChangedCallback(next, prev);
        console.log('inside propsChangedCallback', 'next:', next, 'prev:', prev);
    }

    /** Skate callback from withChildren; called when the children have changed */
    childrenChangedCallback() {
        console.log('inside childrenChangedCalback');
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
    }

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

VirtuaTrainingEchoSkate.props = {
    message: props.string
};
VirtuaTrainingEchoSkate.is = 'vt-echo-skate';


// Registers <vt-echo-slate> as a custom element
window.customElements.define(VirtuaTrainingEchoSkate.is, VirtuaTrainingEchoSkate);
