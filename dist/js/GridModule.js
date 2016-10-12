'use strict';
var ColorsModule = (function () {
	function CM(rows, cols, timeout) {
		this.ro = rows;
		this.co = cols;
		this.timeout = timeout;
		this._appUtils = App.utils;
	}
	CM.prototype.init = function () {
		this.parent = document.body;
		this.parentWidth = this.parent.offsetWidth;
		this.height = window.innerHeight;
		this.registerEvents();
		var _this = this;
		this.start();
		_this.change();
		setInterval(function () {
			_this.change();
		}, _this.timeout);
	};
	CM.prototype.registerEvents = function () {
		this.onResizeEvent();
	};
	CM.prototype.onResizeEvent = function () {
		var _this = this;
		window.onresize = function () {
			console.log('Resizing');
			var timer = setTimeout(function () {
				_this.height = window.innerHeight;
				_this.parentWidth = _this.parent.offsetWidth;
				console.log('Done');
				_this.change();
			}, _this._appUtils.DEBOUNCE_CONSTANT);
		};
	};
	CM.prototype.start = function () {
		var divs = '';
		var _parent = this.parent;
		var _this = this;
		for(var i = 0; i < this.ro * this.co; ++ i) {
			(function (i) {
				_parent.appendChild(_this._appUtils.createElement('div', { 'class': 'inner' }));
			})(i);
		}
	};
	CM.prototype.change = function () {
		var divs = document.getElementsByClassName('inner');
		var divsLength = divs.length;
		var parentWidth = this.parentWidth;
		var parentHeight = this.height;
		for(var i = 0 ; i < divsLength; ++ i) {
			var rgb = this._appUtils.getRandomColors();
			divs[i].style.width = parentWidth / this.ro + 'px';
			divs[i].style.height = parentHeight / this.co + 'px';
			divs[i].style.background = 'rgb(' + rgb.red + ', ' + rgb.green + ', ' + rgb.blue + ')';
		}
	};
	return CM;
}());