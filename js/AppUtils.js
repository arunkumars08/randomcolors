/*AppUtils*/
var App = App || {};
App.utils = {
	RGB_LIMIT: 255,
	DEBOUNCE_CONSTANT: 300,
	getRandomColors: function () {
		var r = Math.round(Math.random() * this.RGB_LIMIT);
		var g = Math.round(Math.random() * this.RGB_LIMIT);
		var b = Math.round(Math.random() * this.RGB_LIMIT);
		return {
			red: r,
			green: g,
			blue: b
		};
	},
	createElement: function (type, style) {
		var newElement = document.createElement(type);
		if(style) {
			var keys = Object.keys(style);
			var len = keys.length;
			for(var i = 0; i < len; ++ i) {
				if(keys[i] === 'class') {
					var classes = style[keys[i]].split(' ');
					for(var iClass in classes) {
						(function (iClass) {
							newElement.classList.add(classes[iClass]);
						})(iClass);
					}
				}
				else {
					newElement.setAttribute(keys[i], style[keys[i]]);
				}
			}
		}
		return newElement;
	}
};

