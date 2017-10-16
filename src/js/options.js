/**
 * Created by toor on 17-10-13.
 */
(function () {
	var userStyle = localStorage.getItem('userStyle'),styleText;
	if(!userStyle){
		var xhr = new XMLHttpRequest(),
			stylesheet = 'css/default.css';
		xhr.open("GET", "/" + stylesheet, false);
		xhr.send();
		styleText = xhr.responseText;
	}else{
		styleText = userStyle;
	}
	var ctrl = document.getElementById('stylectrl');
	ctrl.innerText = styleText;
	document.getElementById('save').addEventListener('click', function (event) {
		localStorage.setItem('userStyle', ctrl.innerText);
	});
}());