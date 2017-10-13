/**
 * Created by toor on 17-10-13.
 */
'use strict';

var userStyle = localStorage.userStyle,styleText;
console.log(location.protocol);
if (location.protocol === 'chrome-devtools:') (function() {
	'use strict';
	if(userStyle){
		styleText = userStyle;
	}else{
		// var xhr = new XMLHttpRequest(),
		// 	stylesheet = 'css/default.css';
		// xhr.open("GET", "/" + stylesheet, false);
		// xhr.send();
		// styleText = xhr.responseText;
		// chrome.devtools.panels.applyStyleSheet(styleText);
		// alert(333);
		var l = document.createElement('link');
		l.rel = 'stylesheet';
		l.href = chrome.runtime.getURL('css/default.css');
		document.head.appendChild(l);
		l.onload=function () {
			alert('onload...');
			alert(this.innerText);
		}
		// alert(222);
	}
})();
