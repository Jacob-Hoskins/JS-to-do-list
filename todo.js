let Task = [];

function addTask(){
	let node = document.createElement("li");
	let textNode = document.createTextNode(
		document.getElementById("userInput").value
	);
	node.appendChild(textNode);
	document.getElementById("myList").appendChild(node);
};

