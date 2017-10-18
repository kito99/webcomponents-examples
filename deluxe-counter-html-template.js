/**
 deluxe-counter example custom element using HTML templates.

 @author Kito D. Mann (kito-public at virtua dot com), http://virtua.tech
 */

(function() {

		const template = document.createElement(`
	
		<style>
		    .counter {
            	color: indigo;
            	font-size: 60pt;
            	font-family: sans-serif;
            	text-align: center;
            	display: block;
            	padding: 10px;
            	border: 1px black inset;
        	}

        	.counter-disabled {
           	 	color: gray;
        	}
		</style>
		
		<div id="counter" class="counter counter-disabled">Deluxe Counter</div>
		
		`);

		class DeluxeCounter extends SimpleCounter {

			/** Fires when an instance was inserted into the document */
			connectedCallback() {
				this._content = template.content.cloneNode(true);
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

			start() {
				super.start();
				this._content.className = "counter";
			}

			stop() {
				super.stop();
				this._content.className = "counter counter-disabled";
			}

			update(counterValue) {
				this._content.innerText = counterValue;
			}

		}
		window.customElements.define('deluxe-counter', DeluxeCounter);
	}
);