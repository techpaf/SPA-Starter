$(document).ready(function(){
	// DOM is ready...
	console.log("What will you build today ?");

	doRouting();
});

function doRouting(){	
	myRoma = new Roma();

	myRoma.addRoute('/', function(){
		console.log("Homepage");
		document.getElementById("currentPage").textContent = "Homepage";
	});

	myRoma.addRoute('/about', function(){
		console.log("About");
		document.getElementById("currentPage").textContent = "About";
	});

	myRoma.addRoute('/contact', function(){
		console.log("Contact");
		document.getElementById("currentPage").textContent = "Contact";
	});

	myRoma.init();
}