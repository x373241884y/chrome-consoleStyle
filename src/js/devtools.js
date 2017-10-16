/**
 * Created by toor on 17-10-13.
 */
'use strict';

var userStyle = localStorage.getItem('userStyle'),styleText;
if(userStyle){
	styleText = userStyle;
}else{
	var xhr = new XMLHttpRequest(),
		stylesheet = 'css/default.css';
	xhr.open("GET", "/" + stylesheet, false);
	xhr.send();
	styleText = xhr.responseText;
}
chrome.devtools.panels.applyStyleSheet(styleText);