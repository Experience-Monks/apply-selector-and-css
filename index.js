var domCSS = require('dom-css');
var parseSelector = require('parse-selector');
var cssobjectFromSelector = require('cssobject-from-selector');

module.exports = function cssApply(css) {

	var getCSS = css ? cssobjectFromSelector(css) : null;

	return function cssApply(el, selector) {

		var infoSelector = parseSelector(selector);
		var css;
		var style;

		if(infoSelector.length === 1) {

			infoSelector = infoSelector[ 0 ];

			if(infoSelector.id) {
				el.id = infoSelector.id.substr(1);	
			}
			
			if(infoSelector.className) {
				el.className = infoSelector.className.split('.').slice(1).join(' ');	
			}
			
			// if css was passed
			if(getCSS) {

				css = getCSS.fromElIdClassName(infoSelector.el, infoSelector.id, infoSelector.className);

				try {

					domCSS(el, css);	
				} catch(e) {

					style = el.style || ( el.style = {} );

					for( var i in css ) {
						style[ i ] = css[ i ];
					}
				}
			}
		} else {

			throw new Error('your selector should select just one element');
		}
	};
};