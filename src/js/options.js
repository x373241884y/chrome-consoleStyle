/**
 * Created by toor on 17-10-13.
 */
// var city = localStorage.city || 'beijing';
// document.getElementById('city').value = city;
// document.getElementById('save').onclick = function(){
// 	localStorage.city = document.getElementById('city').value;
// 	alert('保存成功。');
// }
(function () {
	var defaultCss = '\n\
.console-error-level .console-message-text{\n\
	color: red;\n\
}\n\
\n\
.console-warning-level .console-message-text {\n\
	color: orange;\n\
}\n\
\n\
.console-log-level .console-message-text {\n\
	color:green;\n\
}\n';

	var ctrl = document.getElementById('style-ctrl');
	ctrl.value = defaultCss;
	document.getElementById('save').addEventListener('click', function (event) {
		console.log(ctrl.value);
	});
}());