(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}((function () { 'use strict';

	document.getElementById('test').innerHTML = 'before';

})));
