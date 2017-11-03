import {Component, Prop} from '@stencil/core';


@Component({
    tag: 'vt-echo-stencil',
    styleUrl: 'vt-echo-stencil.scss',
    shadow: true
})
export class VirtuaTrainingEchoStencil {

    @Prop() message: string;

    render() {
        return (
            <span>{this.message}</span>
        );
    }

    /**
     * Stencil callback; called when the component is about to load but has not rendered yet.
     *
     * This is a good place to make any last minute updates before rendering.
     */
    componentWillLoad() {
        console.log('Inside componentWillLoad()', 'The component is about to be rendered');
    }

    /**
     * Stencil callback; called component has been loaded and has rendered.
     *
     * Updating data in this event may cause the component to re-render.
     */
    componentDidLoad() {
        console.log('Inside componentDidLoad()', 'The component has been rendered');
    }

    /**
     * Stencil callback; called when the component is about to update and re-render.
     *
     * Called multiple times throughout the life of the component as it updates.
     */
    componentWillUpdate() {
        console.log('Inside componentWillUpdate()', 'The component will update');
    }

    /**
     * Stencil callback; called when the component has finished updating.
     *
     * Called after componentWillUpdate
     */
    componentDidUpdate() {
        console.log('Inside componentDidUpdate()', 'The component did update');
    }

    /**
     * Stencil callback; called when the component has unloaded and the element will be destroyed.
     */
    componentDidUnload() {
        console.log('Inside componentDidUnload', 'The view has been removed from the DOM');
    }
}
