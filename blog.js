"use strict";
var blogs = {};
var newpars = [];
var clicked = {};
window.onload = function() {
	run();
	var headers = document.getElementsByTagName("h2");

	for (var i = 0; i < headers.length; i++) {
		headers[i].onclick = expandP;
	}
	
}

function run() {
	var headers = document.getElementsByTagName("h2");
	var paragraphs = document.getElementsByTagName("p");
	var temp;

	for (var i = 0; i < paragraphs.length-1; i++) {
		temp = paragraphs[i].innerHTML;
		if (temp != '') {
			newpars.push(paragraphs[i]);
		} 
	}

	for (var i = newpars.length - 1; i >= 0; i--) {
		var p = newpars[i];
		p.parentNode.removeChild(p);
	}

	for (var i = 0; i < newpars.length -1; i++){
		blogs[headers[i].innerHTML] = newpars[i];
		clicked[headers[i].innerHTML] = 0;
	}
}

//Append a paragraph under the current
function expandP() {
	var para;
	var k;
	for (k in blogs) {
		if (clicked[k] == 0) {
			if (this.innerHTML == k) {
				para = document.createElement("p");
				para.innerHTML = blogs[k].innerHTML;
				this.parentNode.appendChild(para);
				clicked[k] = 1;
			}
		}
	}
}