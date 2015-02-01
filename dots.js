"use-strict";

window.onload = function(){
	loadIcons();
};

function loadIcons(){
	var iconElements = document.getElementsByTagName("span");
	var icons = [iconElements[0].innerHTML,
				 iconElements[1].innerHTML];
	var area = document.getElementById("logos");
	var area1 = document.getElementById("test1");
	var area2 = document.getElementById("test2");

	area1.removeChild(iconElements[0]);
	area2.removeChild(iconElements[0]);

	area1.appendChild(document.createElement("br"));

	for (var i = 0; i < icons[0]; i++){
		if (j % 10 == 0)
			area1.appendChild(document.createElement("br"));

		var tempIcon1 = document.createElement("img");

		tempIcon1.src = "client.png";
		area1.appendChild(tempIcon1);

	}

	area.appendChild(document.createElement("br"));
	area2.appendChild(document.createElement("br"));

	for (var j = 0; j < icons[1]; j++){
		if (j % 10 == 0)
			area2.appendChild(document.createElement("br"));

		var tempIcon2 = document.createElement("img");

		tempIcon2.src = "client.png";
		area2.appendChild(tempIcon2);
	}
	
}
