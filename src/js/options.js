/**
 * Created by toor on 17-10-13.
 */
(function () {
	var userStyle = localStorage.userStyle,styleText;
	if(!userStyle){
		var xhr = new XMLHttpRequest(),
			stylesheet = 'css/default.css';
		xhr.open("GET", "/" + stylesheet, false);
		xhr.send();
		styleText = xhr.responseText;
		var ctrl = document.getElementById('style-ctrl');
		ctrl.value = styleText;
		document.getElementById('save').addEventListener('click', function (event) {
			console.log(ctrl.value);
		});
	}
}());