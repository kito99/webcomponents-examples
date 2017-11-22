/*! Built with http://stenciljs.com */

App.loadStyles("vt-echo-stencil","[data-vt-echo-stencil-host] {\n  display: inline-block;\n}\n\nspan[data-vt-echo-stencil] {\n  padding: 1rem;\n  background-color: aliceblue;\n}\nvt-echo-stencil.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"vt-echo-stencil",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
"use strict";
// @stencil/core

var VirtuaTrainingEchoStencil = /** @class */ (function () {
    function VirtuaTrainingEchoStencil() {
    }
    VirtuaTrainingEchoStencil.prototype.render = function () {
        return (h("span", null,
            "   asdas",
            this.message));
    };
    /**
     * Stencil callback; called when the component is about to load but has not rendered yet.
     *
     * This is a good place to make any last minute updates before rendering.
     */
    VirtuaTrainingEchoStencil.prototype.componentWillLoad = function () {
        console.log('Inside componentWillLoad()', 'The component is about to be rendered');
    };
    /**
     * Stencil callback; called component has been loaded and has rendered.
     *
     * Updating data in this event may cause the component to re-render.
     */
    VirtuaTrainingEchoStencil.prototype.componentDidLoad = function () {
        console.log('Inside componentDidLoad()', 'The component has been rendered');
    };
    /**
     * Stencil callback; called when the component is about to update and re-render.
     *
     * Called multiple times throughout the life of the component as it updates.
     */
    VirtuaTrainingEchoStencil.prototype.componentWillUpdate = function () {
        console.log('Inside componentWillUpdate()', 'The component will update');
    };
    /**
     * Stencil callback; called when the component has finished updating.
     *
     * Called after componentWillUpdate
     */
    VirtuaTrainingEchoStencil.prototype.componentDidUpdate = function () {
        console.log('Inside componentDidUpdate()', 'The component did update');
    };
    /**
     * Stencil callback; called when the component has unloaded and the element will be destroyed.
     */
    VirtuaTrainingEchoStencil.prototype.componentDidUnload = function () {
        console.log('Inside componentDidUnload', 'The view has been removed from the DOM');
    };
    return VirtuaTrainingEchoStencil;
}());

exports['vt-echo-stencil'] = VirtuaTrainingEchoStencil;
},


/***************** vt-echo-stencil *****************/
[
/** vt-echo-stencil: tag **/
"vt-echo-stencil",

/** vt-echo-stencil: members **/
[
  [ "message", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** vt-echo-stencil: host **/
{}

]
);